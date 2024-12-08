

import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
  //Add Admin 256 encrypted hash address here, Genesis Block
  "0xcad19bc0fcc0d8d3254a5785280c00f0278c0ac7b9cfbc3352760bbdf1f7a43a": true,
  "0xe17c108012700b2b63b8b83735bff68b8e819d60722bd398950736bc489f7108":true
}

export const handler = (web3, provider) => () => {

  const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]

      if (!account) {
        throw new Error("Cannot retreive an account. Please refresh the browser.")
      }

      return account
    }
  )

  useEffect(() => {
    const mutator = accounts => mutate(accounts[0] ?? null)
    provider?.on("accountsChanged", mutator)

    return () => {
      provider?.removeListener("accountsChanged", mutator)
    }
  }, [provider])

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}
