import { IWallet } from '@meshsdk/common';

class Transaction {
    public static async sign_data(wallet: IWallet, data: string, wallet_address: string | undefined){
        return await wallet.signData(data, wallet_address)
    }

    public static async submit_tx(wallet: IWallet, signedTx: string){
        return await wallet.submitTx(signedTx)
    }
}

export default Transaction