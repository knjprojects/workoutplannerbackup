import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

//this is a post request from frontend with axios but get fetching from flask
export async function GET(Request:any) {
  
}

 export async function HEAD(Request:any) {}
// export async function POST(Request) {}
 export async function PUT(Request:any) {}
 export async function DELETE(Request:any) {}
export  async function POST(req:any/*req: NextApiRequest, res: NextApiResponse*/) {
    const params:any = await req.json();

    console.log('Getting ' +JSON.stringify(params) +' in the meals remove route')
    try {
        const postData = { user_id: params.user_id, meal_id: params.meal_id }; // Replace with actual data
        const response = await fetch('https://workoutplannerbackend.onrender.com/meals/remove', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(postData),
        });
      
        if (!response.ok || response.status==400  || response.status==404  || response.status==500) {
            //throw new Error(`Failed to fetch data from the Flask server. Status code: ${response.status}`);
            return NextResponse.json({ error: 'An error occurred while fetching data from the Flask server.' }, { status: 500 });
          }
      
        const jsondata = await response.json();
        console.log(JSON.stringify(jsondata))
        return NextResponse.json(jsondata, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error: 'An error occurred while fetching data from the Flask server.' }, { status: 500 });
      }
}
