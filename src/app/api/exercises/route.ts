import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

//this is a post request from frontend with axios but get fetching from flask
export async function GET(Request:any) {
    try {
        const response:any = await fetch(`https://workoutplannerbackend.onrender.com/exercises`)
        const data:any = await response.json()
        console.log(data)
        return NextResponse.json(data,{status:200})
      } catch (error) {
        return NextResponse.json({ error: 'An error occurred while fetching data from the Flask server.' })
      }
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(req:any/*req: NextApiRequest, res: NextApiResponse*/) {
    const params:any = await req.json();

    console.log('Getting ' +JSON.stringify(params) +' in the routines route')
    
}
