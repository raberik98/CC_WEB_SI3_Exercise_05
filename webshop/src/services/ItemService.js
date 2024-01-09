export async function getAllItems() {
    try {
        const resp = await fetch("/api/v1/items")
        const data = await resp.json()

        if (resp.status === 200) {
            return {status: "ok", data: data}
        }
        else {
            return {status: "notF", data: data}
        }
    } catch (error) {
        return  {status: "err", data: error}
    }

}