import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Tryform = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_v2p2edi',
        'template_nqatkhd',
        form.current,
        'bm-LSlW5GT_wxLF0d'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text)
          // 发送成功后刷新页面
          window.location.reload()
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <form
      className="w-full max-w-lg p-10 border-2 border-gray-300 rounded-xl bg-gray-800"
      ref={form}
      onSubmit={sendEmail}
      name="from_name"
      aria-label="from_name"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name（姓氏）
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-5"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="user_first-name"
            aria-label="user_first-name"
            required
          />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name（名字）
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            name="user_last-name"
            aria-label="user_last-name"
            required
          />
        </div>
        <div className="w-full px-3 mb-16">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            contact number（聯絡方法）
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="tel"
            pattern="[0-9]{8}"
            placeholder="Phone Number"
            name="user_contact-number"
            aria-label="user_contact-number"
            required
            oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, 8);"
          />
        </div>
        <p className="block uppercase tracking-wide text-gray-500 text-md font-bold mb-2">
          請點答以下問題：
        </p>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            1.你的公司網站或ig?
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="http://example.com  or  @example_ig"
            name="user_Question-1"
            aria-label="user_Question-1"
            required
          />
        </div>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            2.請問你的行業？
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder=""
            name="user_Question-2"
            aria-label="user_Question-2"
            required
          />
        </div>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            3.你目前主要透過什麼方式獲客？
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder=""
            name="user_Question-3"
            aria-label="user_Question-3"
            required
          />
        </div>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            4.你目前的查詢容易轉化成生意嗎？
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder=""
            name="user_Question-4"
            aria-label="user_Question-4"
            required
          />
        </div>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            5.你收到查詢後會進行再營銷嗎？
          </label>
           {' '}
          <input
            type="radio"
            name="user_Question-5"
            value="yes"
            aria-label="user_Question-5"
            required
          />
           {' '}
          <label className="text-gray-200" htmlFor="yes">
            會
          </label>
           {' '}
          <input
            type="radio"
            name="user_Question-5"
            value="no"
            aria-label="user_Question-5"
          />
           {' '}
          <label className="text-gray-200" htmlFor="no">
            不會
          </label>
           {' '}
        </div>
        <div className="w-full px-3 mb-5">
          <label
            className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            6.你的客戶平均查詢多少次後才能成交？
          </label>
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="user_Question-6"
            aria-label="user_Question-6"
          >
            <option>選擇：</option>
            <option>1-3次</option>
            <option>3次以上</option>
          </select>
        </div>
      </div>
      <input
        type="submit"
        value="提交"
        className="cursor-pointer border rounded-full border-black text-black px-7 py-1.5 font-black text-xl bg-amber-300 hover:bg-amber-400 active:bg-amber-500"
      />
    </form>
  )
}

export default Tryform
