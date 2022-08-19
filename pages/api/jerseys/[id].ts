import { NextApiHandler } from "next";
import {jerseys} from '../../../utils/jersey';

const handler: NextApiHandler = (req, res) => {
    const { id } = req.query;
    for(let i in jerseys){
        if(jerseys[i].id.toString() === id?.toString()) res.json(jerseys[i])
    }
}
export default handler;