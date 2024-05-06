import ProgressBar from 'react-bootstrap/ProgressBar';
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    href: '#',
    price: '₹61,999',
    color: 'Orange',
    imageAlt: 'Nike Air Force 1 07 LV8',
    quantity: 1,
  },
]

const UserDashboard = () => {
  const now = 60;
  return (
    <div className="bottom">
      {/* main 1 */}
      <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
        {/* text  */}
        <h2 className=" text-2xl lg:text-3xl font-bold">Enrolled Courses</h2>

        {/* main 2 */}
        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
          {/* main 3  */}
          <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
            {/* left  */}
            <div className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                <div className="mb-4">
                  <div className="text-sm font-semibold text-black">Order Id</div>
                  <div className="text-sm font-medium text-gray-900">#74557994327</div>
                </div>

                <div className="mb-1">
                  <div className="text-sm font-semibold">Date</div>
                  <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
                </div>

              </div>
            </div>
          </div>
          {/* right  */}
          <div className="flex-1">
            <div className="p-8">
              <ul className="-my-7 divide-y divide-gray-200">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                          src={product.imageSrc}
                          alt={product.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-500">{product.color}</p>
                        </div>
                        <div className='mt-3'>
                          <p className='font-bold text-sm mb-1'>Completed: </p>
                          <ProgressBar variant="success" now={now} label={`${now}%`} />
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;