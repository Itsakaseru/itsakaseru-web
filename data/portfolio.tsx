import getData from "./portfolioData";

export default function apiHandler(id: string | undefined)
{
    if (!id)
    {
        return getData();
    }

    return getData().find(arr => arr.id === id);
}