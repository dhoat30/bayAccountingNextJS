import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input/Input'
import MediumTitle from '../Titles/Titles/MediumTitle'
import TextArea from '../Input/TextArea'
import Button from '../Button/Button'
import Errors from '../Notifications/Errors/Errors'
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay'

function TradeContactForm({ title, emailTo, emailRouteUrl, cancelPass }) {
    const [enteredPhone, setEnteredPhone] = useState('')
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false)
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
    const [enteredSubject, setEnteredSubject] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [showLoading, setShowLoading] = useState('')

    // submission message
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // validate name
    const enteredPhoneIsValid = enteredPhone.length > 6
    const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched

    // validate email
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let enteredEmailIsValid = pattern.test(enteredEmail)
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    // submit handler
    const submitHandler = (e) => {
        e.preventDefault()
        setEnteredPhoneTouched(true)
        setEnteredEmailTouched(true)
        if (!enteredPhoneIsValid && !enteredEmailIsValid) {
            return
        }
        const body = {
            phone: enteredPhone,
            email: enteredEmail,
            subject: enteredSubject,
            message: enteredMessage,
            emailTo: emailTo
        }
        setShowLoading(true)
        setSuccessMessage('')
        setErrorMessage('')
        fetch(emailRouteUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res === 200) {
                    setEnteredSubject('')
                    setEnteredEmail('')
                    setEnteredPhone('')
                    setEnteredMessage('')
                    setEnteredEmailTouched(false)
                    setEnteredPhoneTouched(false)
                    setSuccessMessage('Message Sent!')
                    setShowLoading(false)
                }
                else if (res === 400) {
                    setShowLoading(false)
                    setErrorMessage('Something went wrong. Please try again.')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={submitHandler}>
            <LoadingOverlay show={showLoading} />
            <Content>
                <InputContainer>
                    <Input
                        isInvalid={phoneInputIsInvalid}
                        type="text"
                        placeholder="*Phone Number"
                        value={enteredPhone}
                        inputChange={(e) => setEnteredPhone(e.target.value)}
                        blurChange={() => setEnteredPhoneTouched(true)}

                    />
                    {phoneInputIsInvalid ? <Errors>Entered phone number is not valid</Errors> : null}
                </InputContainer>

                <InputContainer>
                    <Input
                        isInvalid={emailInputIsInvalid}
                        type="email"
                        placeholder="*Your Email Address"
                        value={enteredEmail}
                        inputChange={(e) => setEnteredEmail(e.target.value)}
                        blurChange={() => setEnteredEmailTouched(true)}
                    />
                    {emailInputIsInvalid ? <Errors>Entered email address is not valid</Errors> : null}

                </InputContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="Subject"
                        value={enteredSubject}
                        inputChange={(e) => setEnteredSubject(e.target.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <TextArea
                        value={enteredMessage}
                        onChange={(e) => setEnteredMessage(e.target.value)}
                        placeholder="Message"
                    />
                </InputContainer>
                {successMessage ? <p className="success left-align" >{successMessage} </p> : null}
                {errorMessage ? <p className="error left-align" >{errorMessage} </p> : null}
            </Content>

            <ButtonContainer>
                <Button>Send Message</Button>
            </ButtonContainer>

        </Form>
    )
}

export default TradeContactForm

const Form = styled.form`
min-height: 200px;
width: 100%;
`
const Content = styled.div`

`
const ButtonContainer = styled.div`
margin-top: 40px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
`

const InputContainer = styled.div`
margin: 15px 0; 
width: 100%; 
`