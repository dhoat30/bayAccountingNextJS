import React, { useState, useContext, useEffect } from 'react'
import Input from '../../Input/Input';
import Errors from '../../Notifications/Errors/Errors';
import Button from '../../Button/Button'
import axios from 'axios'
import Paragraph from '../../Titles/Paragraph/Paragraph';
import styled from 'styled-components';
import Link from 'next/link'
// import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay'
function RegisterForm(props) {
    // register state
    const [isRegistered, setIsRegistered] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    const [submissionError, setSubmissionError] = useState('')

    // username states 
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredUsernameTouched, setEnteredUsernameTouched] = useState(false)

    // email states
    const [email, setEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    // password states 
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false)

    // validate username
    var usernamePattern = /^[a-zA-Z0-9]+$/;
    let enteredUsernameIsValid = usernamePattern.test(enteredUsername) && enteredUsername.length > 3
    const usernameInputIsInvalid = !enteredUsernameIsValid && enteredUsernameTouched

    // validate email
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let enteredEmailIsValid = pattern.test(email)
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    // validate password 
    let enteredPasswordIsValid = enteredPassword.length >= 8; //reg.test(enteredPasswordTouched)
    const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched



    // input change handlers 
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    // input blur change handler
    // const usernameBlurHandler = (event) => {
    //     setEnteredUsernameTouched(true)
    // }
    const usernameBlurHandler = () => {
        setEnteredUsernameTouched(true)
    }
    const emailBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }
    const passwordBlurHandler = (event) => {
        setEnteredPasswordTouched(true)
    }

    const router = useRouter()
    // form submission
    async function formSubmissionHandler(event) {
        event.preventDefault()
        setEnteredEmailTouched(true)
        setEnteredPasswordTouched(true)
        setShowOverlay(true)
        setSubmissionError('')
        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            return
        }
        axios.post('https://inspiry.co.nz/wp-json/wp/v2/users/register',
            {
                username: enteredUsername,
                email: email,
                password: enteredPassword
            }).then(response => {
                logInUser(email, enteredPassword)

            }).catch(err => {
                setSubmissionError(err.response.data.message)
                setShowOverlay(false)
            })
    }

    async function logInUser(emailID, password) {

        axios.post("/home/api/login",
            {
                username: email,
                password: enteredPassword
            }).then(response => {
                console.log(response)
                router.reload()
                router.push('/pins')
                setShowOverlay(false)
            }).catch(err => {
                setSubmissionError(err.response.data.message)
                setShowOverlay(false)
            })
        // const result = await signIn('credentials', {
        //     redirect: false,
        //     email: emailID,
        //     password: password
        // })
        // redirect a user to pins 
        // if (!result.error && result.status === 200) {
        //     console.log('add redirection here')
        //     router.push("/pins")
        //     props.closeModal()
        //     setShowOverlay(false)
        // }
        // else {
        //     setSubmissionError(result.error)
        //     setShowOverlay(false)
        // }
    }



    return (
        <React.Fragment>
            <Form onSubmit={formSubmissionHandler}>
                <Input
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    blurChange={usernameBlurHandler}
                    inputChange={usernameChangeHandler}
                    isInvalid={usernameInputIsInvalid}
                    value={enteredUsername} />
                {usernameInputIsInvalid ? <Errors>Your username must be at least 4 characters long.</Errors> : null}

                <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    blurChange={emailBlurHandler}
                    inputChange={emailChangeHandler}
                    isInvalid={emailInputIsInvalid}
                    value={email} />
                {emailInputIsInvalid ? <Errors>Entered email address is not valid</Errors> : null}

                <Input
                    type="password"
                    placeholder="Create a password"
                    id="password" name="password"
                    inputChange={passwordChangeHandler}
                    blurChange={passwordBlurHandler}
                    isInvalid={passwordInputIsInvalid}
                    value={enteredPassword}
                />
                {passwordInputIsInvalid ? <Errors>Your password must be at least 8 characters long. </Errors> : null}

                {/* <CheckboxContainer>
                    <CheckBox
                        type="checkbox"
                    />
                    <LabelStyle>By continuing, you agree to Pinterest's Terms of Service and acknowledge you've read our Privacy Policy</LabelStyle>
                </CheckboxContainer> */}

                <ButtonsContainer>
                    <Button width="fullWidth">Submit</Button>
                    <ParagraphStyle onClick={() => props.closeModal()} align="center">Cancel</ParagraphStyle>
                </ButtonsContainer>
                {submissionError ? <Errors align="center">{submissionError} </Errors> : null}
                <Policy>By continuing, you agree to Inspiry&apos;s Terms of Service and acknowledge you&apos;ve read our
                    <Link passHref href="/privacy-policy"><a> Privacy Policy</a></Link>
                </Policy>
            </Form>

            <LoadingOverlay show={showOverlay} />
        </React.Fragment >
    )
}

export default RegisterForm
const Form = styled.form`
  width: 95%;
  max-width: 250px;
`
const Policy = styled(Paragraph)`
font-size: 0.9rem;
text-align: center;
line-height: 1.3rem;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

`
const ParagraphStyle = styled(Paragraph)`
margin: 10px 0; 
cursor: pointer;
&:hover{
text-decoration: underline; 
}
`