import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-asd max-w-3xl py-4 mx-auto px-10" dir="rtl">
      <Head>
        <title>أحمد بن سعد</title>
      </Head>

      <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center sm:items-start py-5 mb-20">
        <div className="text-center sm:text-right">
          <h1 className="text-xl font-bold text-gray-700">أحمد بن سعد</h1>
          <p className="text-gray-500 font-normal">مهندس برمجيات، مطور ويب، مصمم تجربة مستخدم</p>
        </div>
        <div className="mb-8">
          <ul className="flex items-center space-x-6 space-x-reverse font-bold text-medium text-gray-400 text-sm">
            <li><a href="" className="hover:text-blue-600 transition duration-150 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out">عني</a></li>
            <li><a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out">تواصل</a></li>
          </ul>
        </div>
      </div>

      <main className="">
        <article>
          <h2 className="text-3xl mb-3 text-gray-800 leading-relaxed font-bold"><a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out">طريقة استخدام Tailwindcss مع NextJS</a></h2>
          <div className="flex mb-4 space-x-4 space-x-reverse">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              <span className="mr-1 text-sm text-gray-500 bg-red-500">11 مايو 2020</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out mr-1 text-sm text-gray-500">فرونت اند</a>
            </p>
          </div>
          <p className="leading-loose text-gray-800">
            خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي "consectetur"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول ...
          </p>
          <a href="" className="inline-block py-4 font-medium text-gray-400 hover:text-blue-600 transition duration-150 ease-in-out">أكمل القراءة</a>
        </article>
        <div className="border-t mt-4 mb-8"></div>
        <article>
          <h2 className="text-3xl mb-3 text-gray-800 leading-relaxed font-bold"><a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out">طريقة استخدام Tailwindcss مع NextJS</a></h2>
          <div className="flex mb-4 space-x-4 space-x-reverse">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              <span className="mr-1 text-sm text-gray-500">11 مايو 2020</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <a href="#" className="hover:text-blue-600 transition duration-150 ease-in-out mr-1 text-sm text-gray-500">فرونت اند</a>
            </p>
          </div>
          <p className="leading-loose text-gray-800">
            خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي "consectetur"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول ...
          </p>
          <a href="" className="inline-block py-4 font-medium text-gray-400 hover:text-blue-600 transition duration-150 ease-in-out">أكمل القراءة</a>
        </article>
      </main>
    </div>
  )
}
