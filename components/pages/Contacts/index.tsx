import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { withTranslation } from '../../../i18n'

type Inputs = {
    Name: string
    'E-Mail': string
    Subject: string
    Message: string
}

const Contacts = ({ t }) => {
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(
        false
    )

    const addContactMe = async (data) => {
        try {
            await fetch('/api/newContactMe', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            reset()
            setIsSuccessfullySubmitted(true)
            setTimeout(function () {
                setIsSuccessfullySubmitted(false)
            }, 3000)
        } catch (error) {
            console.error(error)
        }
    }

    const { register, handleSubmit, reset, errors } = useForm<Inputs>()
    const onSubmit = (data) => addContactMe(data)

    return (
        <div
            id="Contacts"
            className={`relative bg-background-pattern bg-fixed bg-cover flex flex-col items-center justify-center p-5 md:px-32 pb-32`}>
            <form
                className="w-full flex flex-col"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col md:flex-row">
                    <div className="w-full flex-col">
                        <div className="w-full md:pr-3">
                            <label className="font-open block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t('Contacts.Name')}{' '}
                                {errors.Name && (
                                    <span className="text-red-600 text-xs italic">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-black border ${
                                    errors.Name && 'border-red-600'
                                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
                                name="Name"
                                ref={register({ required: true })}
                                type="text"
                            />
                        </div>
                        <div className="w-full md:pr-3">
                            <label className="font-open block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t('Contacts.E-Mail')}{' '}
                                {errors['E-Mail'] && (
                                    <span className="text-red-600 text-xs italic">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 ${
                                    errors['E-Mail'] && 'border-red-600'
                                }`}
                                name="E-Mail"
                                type="email"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div className="w-full md:pr-3">
                            <label className="font-open block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                {t('Contacts.Subject')}{' '}
                                {errors.Subject && (
                                    <span className="text-red-600 text-xs italic">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-blackborder rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 ${
                                    errors.Subject && 'border-red-600'
                                }`}
                                name="Subject"
                                ref={register({ required: true })}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="w-full md:pl-3 mb-9">
                        <label className="font-open block uppercase tracking-wide text-white text-xs font-bold mb-2">
                            {t('Contacts.Message')}{' '}
                            {errors.Name && (
                                <span className="text-red-600 text-xs italic">
                                    {t('Contacts.FieldRequired')}
                                </span>
                            )}
                        </label>
                        <textarea
                            className={`font-open no-resize appearance-none block w-full
                            h-full bg-gray-100 text-black border rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 resize-none ${
                                errors.Message && 'border-red-600'
                            }`}
                            name="Message"
                            ref={register({ required: true })}
                        />
                    </div>
                </div>
                {isSuccessfullySubmitted && (
                    <div className="text-center mt-3">
                        <div className="p-2">
                            <div className="font-open inline-flex items-center bg-green-500 leading-none text-white rounded-full p-2 shadow text-teal text-sm">
                                <span className="inline-flex bg-green-300 text-white rounded-full h-6 px-3 justify-center items-center">
                                    {t('Contacts.Success')}
                                </span>
                                <span className="inline-flex px-2">
                                    {t('Contacts.FormSuccess')}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    className="font-open uppercase w-full bg-red-600 text-white font-bold mt-5 py-2 px-4"
                    type="submit">
                    {t('Contacts.Send')}
                </button>
            </form>
        </div>
    )
}

export default withTranslation('common')(Contacts)
