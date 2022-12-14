import { useEffect, useState } from "react"

const useSeller = email => {


    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {

        if (email) {
            fetch(`https://assignment-12-laptop-resale-server.vercel.app/users/seller/${email}`)
                .then(res => res.json()
                    .then(data => {
                        // console.log(data);
                        setIsSeller(data.isSeller);
                    }))
        }
    }, [email])
    return [isSeller]


}

export default useSeller;