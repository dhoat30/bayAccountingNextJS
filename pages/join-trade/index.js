import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import JoinTrade from '../../Components/JoinTrade/JoinTrade'
import cookie from 'cookie'
import AuthContext from '../../store/auth-context'
export default function Professional(props) {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        if (props.token) {
            authContext.login(props.token)
        }
    }, [])
    return (
        <JoinTrade />
    )
}

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie)
    return {
        props: {
            token: !cookies.inpiryAuthToken ? null : cookies.inpiryAuthToken
        }
    }
}