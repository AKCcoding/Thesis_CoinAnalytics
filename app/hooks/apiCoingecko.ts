export async function fetchFromApi(endpoint: string, cacheTime?: number): Promise<any> {
    const _url = new URL('https://api.coingecko.com/api/v3/' + endpoint);
    const response = await fetch(_url.toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24,
        }
    });

    const data = await response.json();
    return data;
}

export async function getTrendingCoins() {
  const data = await fetchFromApi('search/trending');
  return data.coins.splice(0, 3);
}

export async function getNftMarketCap() {
    // const data = await fetchFromApi('nfts/list?order=market_cap_usd_desc');
    // const nft = await fetchFromApi(`nfts/${data.asset_platform_id}/contract/${data.contract_address}`);
    // const nftData = data.map((item: any) => (
    //     {
    //         id: item.id,
    //         name: item.name,
    //         contract_address: item.contract_address,
    //         asset_platform_id: item.asset_platform_id,
    //         symbol: item.symbol,
    //         image: nft.image.small
    //     }
    // ));
    const data = await fetchFromApi('search/trending');
    return data.nfts.splice(0, 3);
}

export async function getCoingeckoGlobalData(): Promise<any> {
    const apiUrl: string = 'https://api.coingecko.com/api/v3/global';
    const response: Response = await fetch(apiUrl);
    const data: any = await response.json();
    return data;
}
export async function getGasFee(): Promise<any> {
    const apiUrl: string = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1YFCZB8YSYNTWPS4DCRN91G2P3VHCGZ1GE';
    const response: Response = await fetch(apiUrl);
    const data: any = await response.json();
    return data;
}




