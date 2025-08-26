import React, { useState } from 'react'
import { useContext } from 'react'
import { contextState } from '../context/context'
import { toast } from 'react-toastify'

const PasswordRendering = ({setWebsiteURL, setUsername, setPassword}) => {
    const {passwordObj, setPasswordObj} = useContext(contextState);

    const [copied, setCopied] = useState(false);
    // console.log(passwordObj)

    const copyToClipboard = async (val, keyName) => {
        try {
            await navigator.clipboard.writeText(val);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after 2 sec
            // toast.success('Copied to clipboard...')
            toast.success(`${keyName} Copied to clipboard...`)
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const deletePassword = (idx) => {  
        toast.error(`Password Deleted Successfully`);        
        setPasswordObj(passwordObj.filter((_, index) => index !== idx));
        // console.log(passwordObj.filter((_, index) => idx !== index))
        // console.log(idx)
    }

    const updatePassword = (val, idx) => {
        setWebsiteURL(val.websiteURL);
        setUsername(val.username);
        setPassword(val.password);

        toast.info("Password Updating...")

        setPasswordObj(passwordObj.filter((_, index) => index !== idx));
    }



  return (
    <div className='flex flex-col gap-2'>
        <h1 className="title text-[20px] font-bold">Your Passwords</h1>

        {passwordObj[0] ? '' : <h3>There is nothing to show</h3>}

        {passwordObj[0] && 
            <div className='h-[250px] max-h-[300px] overflow-y-auto overflow-x-auto'>
                <table className='w-[100%]'>
                    <thead>
                        <tr className='bg-green-700 text-center'>
                            <th className='text-white font-semibold p-1.5 rounded-tl-[5px]'>Site</th>
                            <th className='text-white font-semibold p-1.5'>Username</th>
                            <th className='text-white font-semibold p-1.5'>Password</th>
                            <th className='text-white font-semibold p-1.5 rounded-tr-[5px]'>Actions</th>
                        </tr>
                    </thead>

                    
                    <tbody>
                        {passwordObj.map((val, idx) => {
                            // console.log(idx)
                            // encryptPassword()
                            // let encrVal = encryptPassword(val.password);

                            return (
                                <tr className='bg-green-200 text-center'>
                                    <td className='p-2 '>
                                        <div className='flex justify-center items-center gap-x-2 cursor-pointer'>

                                            {val.websiteURL} 
                                            <button onClick={() => copyToClipboard(val.websiteURL, "WebsiteURL")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 hover:fill-gray-500 transition-all cursor-pointer">
                                                    <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>

                                    <td className='p-2 '>
                                        <div className='flex justify-center items-center gap-x-2 cursor-pointer'>

                                            {val.username}
                                            <button onClick={() => copyToClipboard(val.username, "Username")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 hover:fill-gray-500 transition-all cursor-pointer">
                                                    <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>

                                    <td className='p-2 '>
                                        <div className='flex justify-center items-center gap-x-2 cursor-pointer'>

                                            {val.encryptedPassword}
                                            <button onClick={() => copyToClipboard(val.password, "Password")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 hover:fill-gray-500 transition-all cursor-pointer">
                                                    <path fillRule="evenodd" d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>

                                    <td className='p-2 flex gap-3 justify-center items-center'>
                                        <button className='cursor-pointer' onClick={() => updatePassword(val, idx)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 hover:fill-yellow-500">
                                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                </svg>
                                        </button>

                                        <button className='cursor-pointer' onClick={() => deletePassword(idx)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 hover:fill-red-500">
                                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                                </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    

                </table>
            </div>}
    </div>
  )
}

export default PasswordRendering
