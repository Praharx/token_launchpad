'use client'

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { createInitializeInstruction, pack, TokenMetadata } from '@solana/spl-token-metadata';
import React, {useState} from 'react';
import z from "zod";
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';

const formData = z.object({
    uri: z.string().url({message:"Invalid url enter valid"}),
    name: z.string().min(3,{message:"Enter longer char"}),
    symbol: z.string().max(3),
    decimal: z.number().min(0).max(9)
})

const MintToken = () => {
    const [mintData, setMintData] = useState<{mintAcc: String, associateToken: String}>({
        mintAcc: "",
        associateToken: ""
    });
    const [minted, setMinted] = useState(false);
    const [form, setForm] = useState<z.infer<typeof formData>>({
        uri: "",
        name: "",
        symbol: "",
        decimal: 0
    })
    const connection = new Connection(clusterApiUrl("devnet"));
    const wallet = useWallet();

    async function createToken() {
        if(wallet.publicKey){
            try{
                const mintKeypair = Keypair.generate();
                const myKey = wallet.publicKey;
                const metadata: TokenMetadata = {
                    name: form?.name as string,
                    uri: form?.uri as string,
                    symbol: form?.symbol as string,
                    mint: mintKeypair.publicKey,
                    additionalMetadata: []
                }
            }catch(err){
                console.log(err);
            }
            // const mintLen = getMintLen([ExtensionType.MetadataPointer])
        }
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();

        const parsedForm = formData.safeParse(form)
        if(!parsedForm.success){
            toast(JSON.parse(parsedForm.error.message)[0].message)
            return
        }
    }


    return(
        <div className="w-screen h-[80vh]" >
        <div className="w-[70%] mx-auto h-[90%]" >
            <h1 className="text-5xl text-center font-bold mb-4 text-white">
                Create your Token
            </h1>
            <form onSubmit={onSubmit} className="w-[30%] flex flex-col gap-4 text-white mx-auto">
                <div>
                    <Label className="">Name</Label>
                    <Input
                        value={form?.name}
                    onChange={(e) => {
                        setForm({
                            name: e.target.value,
                            uri: form?.uri as string,
                            symbol: form?.symbol as string ,
                            decimal: form?.decimal as number
                        })
                    }} className="" placeholder='Zeref' />
                </div>
                <div>
                    <Label className="">Symbol</Label>
                    <Input onChange={(e) => {
                        setForm({
                            name: form?.name as string,
                            uri: form?.uri as string,
                            symbol: e.target.value ,
                            decimal: form?.decimal as number
                        })
                    }}
                    value={form?.symbol}
                    className="" placeholder='ZRF' />

                </div>
                <div>
                    <Label className="">URL</Label>
                    <Input
                    type='url'
                    onChange={(e) => {
                        setForm({
                            name: form?.name as string,
                            uri: e.target.value,
                            symbol: form?.symbol as string ,
                            decimal: form?.decimal as number
                        })
                    }}
                    value={form?.uri}
                    className="" placeholder='https://....' />

                </div>
                <div>
                    <Label className="">Decimals</Label>
                    <Input
                    type="number"
                    onChange={(e) => {
                        setForm({
                            name: form?.name as string,
                            uri: form?.uri as string,
                            symbol: form?.symbol as string ,
                            decimal: parseInt(e.target.value)
                        })
                    }} 
                    value={form?.decimal}
                    className="" placeholder='9' />

                </div>
                <Button disabled={!wallet.publicKey} type="submit" className="w-[80%] mx-auto" variant={"secondary"}>
                    Make Token
                </Button>
                {
                    minted &&
                    <div>
                        <Label>Your Mint is: {mintData.mintAcc}</Label>
                        <Label>Your ATA is: {mintData.associateToken}</Label>
                    </div>
                }
            </form>

        </div>
        <Toaster />
    </div>
    )
}

export default MintToken