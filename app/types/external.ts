/**
 * Response from:
 * https://api.ensdata.net/*
 */
export type ExternalEnsDataResponse = {
  address: string;
  contentHash: string | null;
  email: string;
  ens: string;
  ens_primary: string;
  resolverAddress: string;
  twitter: string;
  wallets: {
    eth: string;
  };
};
