import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
export async function GET(Request:any) {
  /*const user = "ratos" //params.user;
  const{ map}={map:{'cat':'dog'}};
  const message= `Welcome to my Next application, user: ${user}`
  return NextResponse.json(map);*/
    //return new Response(`map:${map},user:${user}`).json;
    try {
        const response:any = await fetch('https://workoutplannerbackend.onrender.com/init')
        const data:any = await response.json()
        return NextResponse.json(data)
      } catch (error) {
        return NextResponse.json({ error: 'An error occurred while fetching data from the Flask server.' })
      }
  
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(Request:any/*req: NextApiRequest, res: NextApiResponse*/) {
  // Handle the POST request
  //res.status(200).json('looks like it works?');
}
