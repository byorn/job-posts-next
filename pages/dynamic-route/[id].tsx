import { useRouter } from 'next/router'
import Head from "next/head";
const DynamicRoute = ()=>{
    const router = useRouter();
    return (<><Head> <title>{router.query.id} is page name </title></Head>
        Dynamic route {router.query.id}
    </>);
}
export default DynamicRoute;