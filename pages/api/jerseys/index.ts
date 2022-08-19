import { NextApiHandler } from "next";
import {jerseys} from '../../../utils/jersey';

const handler: NextApiHandler = (req, res) => {
    res.json(jerseys);
}
export default handler;