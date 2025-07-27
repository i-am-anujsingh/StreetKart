import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Logo from './Logo.jsx'
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useTranslation } from 'react-i18next'

export default function LogIn() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const onLogin = async (data) => {
        // setError("")
        // try {
        //     authService.logout()
        //     const session = await authService.login(data)
        //     if (session) {
        //         const userData = await authService.getCurrentUser()
        //         if (userData) dispatch(login(userData));
        //         navigate("/")
        //     }
        // } catch (error) {
        //     setError(error.message)
        // }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 px-6 py-10">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    {t("Sign in to your account")}
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    {t("Don't have any account?")}&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        {t("Sign Up")}
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{t("Some error occurred")}</p>}
                <form onSubmit={handleSubmit(onLogin)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label={t("Email: ")}
                            placeholder={t("Enter your email")}
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        t("Email address must be a valid address"),
                                }
                            })}
                        />
                        <Input
                            label={t("Password: ")}
                            type="password"
                            placeholder={t("Enter your password")}
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            {t("Sign in")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}