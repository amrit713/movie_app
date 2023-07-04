import instance from "@/utils/instance"


import { NextResponse, } from "next/server";

export async function GET(request:Request ) {
    const  {searchParams} = new URL(request.url);
    const page = searchParams.get("page")

    try{
  
        console.log(page)

        const {data} = await instance.get(`/movie/popular?language=en-US&page=${page}`)

    return NextResponse.json(data);
       
    }
catch(err:any){
return NextResponse.json({error:err.message})
}
   
  }