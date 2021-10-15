import React, { useState, useContext, useEffect } from 'react'
import Input from '../../Input/Input';
import Errors from '../../Notifications/Errors/Errors';
import Button from '../../Button/Button'
import axios from 'axios'
import styled from 'styled-components';
import ModalContext from '../../../../store/modal-context';
import { useRouter } from 'next/router';
import LoadingOverlay from '../../LoadingOverlay/LoadingOverlay';
function RegisterForm(props) {
    const router = useRouter()
    const modalCtx = useContext(ModalContext)

    // submission error
    const [submissionError, setSubmissionError] = useState('')
    const [loading, setLoading] = useState(false)
    // email states
    const [email, setEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    // password states 
    const [enteredPassword, setEnteredPassword] = useState('')
    const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false)

    // validate email
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let enteredEmailIsValid = pattern.test(email)
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    // validate password 
    let enteredPasswordIsValid = enteredPassword.length >= 8; //reg.test(enteredPasswordTouched)
    const passwordInputIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched


    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const emailBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }
    const passwordBlurHandler = (event) => {
        setEnteredPasswordTouched(true)
    }

    // form submission
    async function formSubmissionHandler(event) {
        event.preventDefault()
        setEnteredEmailTouched(true)
        setEnteredPasswordTouched(true)
        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            return
        }
        setLoading(true)
        setSubmissionError("")
        axios.post("/home/api/login",
            {
                username: email,
                password: enteredPassword
            }).then(response => {
                console.log(response)
                router.reload()
                router.push('/pins')
                setLoading(false)
            }).catch(err => {
                setSubmissionError(err.response.data.message)
                setLoading(false)
            })
    }

    // hide modal 
    const cancelHandler = () => {
        modalCtx.hideLoginModal()
    }
    return (
        <React.Fragment>
            <LoadingOverlay show={loading} />
            <Container onSubmit={formSubmissionHandler}>

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
                    placeholder="Enter your password"
                    id="password" name="password"
                    inputChange={passwordChangeHandler}
                    blurChange={passwordBlurHandler}
                    isInvalid={passwordInputIsInvalid}
                    value={enteredPassword}
                />
                {passwordInputIsInvalid ? <Errors>Your password must be at least 8 characters long. </Errors> : null}
                {submissionError ? <Errors>{submissionError} </Errors> : null}
                <ButtonStyle>Submit</ButtonStyle>
                <Cancel onClick={cancelHandler}>Cancel</Cancel>
            </Container>

        </React.Fragment>
    )
}


export default RegisterForm

const Container = styled.form`
  width: 95%;
  max-width: 250px;
`

const ButtonStyle = styled(Button)`
width: 100%;
margin-top: 20px;
`

const Cancel = styled.div`
text-align: center;
margin-top: 10px;
cursor: pointer;
&:hover{
    text-decoration: underline; 
}
`