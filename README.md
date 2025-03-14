# NameLink

Fetch address names.

#### Supported:

- [Ethereum Name Service](https://ens.domains)
- [Clusters](https://clusters.xyz)

## Endpoints

### GET /address/:address

```
{
  "address": "0x0000000000000000000000000000000000000000",
  "ens": "0000.eth",
  "clusters": "00000/name"
}
```

### GET /health

```
{
  "ens": "OK",
  "clusters": "OK",
  "timestamp": "2025-02-28T00:00:00.000Z"
}
```
