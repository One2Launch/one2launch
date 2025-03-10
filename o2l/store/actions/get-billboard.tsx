import { Billboard } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
const URL = `${baseUrl}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
}

export default getBillboard;