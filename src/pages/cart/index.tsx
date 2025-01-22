import { Button, Label } from 'flowbite-react'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import CardItem from 'src/pages/cart/components/CardItem'
import { removeFromCart } from 'src/redux/reducer/cart.reducer'
import { cartTotalSelector } from 'src/redux/selector/cart.selector'
import { RootState, useAppDispatch } from 'src/redux/store'
import { formatMoney } from 'src/utils/format'

export default function CartPage() {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useAppDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)
  const cartTotal = useSelector(cartTotalSelector)
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id))
    enqueueSnackbar('Remove successfully!!! 🎉', { variant: 'success' })
  }

  return (
    <section className='min-h-screen py-8 antialiased bg-white dark:bg-gray-900 md:py-16'>
      <div className='max-w-screen-xl px-4 mx-auto 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl'>Shopping Cart</h2>
        <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
          <div className='flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl'>
            <div className='space-y-6'>
              {cartItems.length === 0 && <Label htmlFor='no-data' value='No data' />}
              {cartItems.map((item) => (
                <CardItem key={item.id} onRemove={handleRemoveFromCart} item={item} />
              ))}
            </div>
          </div>
          <div className='flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full'>
            <div className='p-4 space-y-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
              <p className='text-xl font-semibold text-gray-900 dark:text-white'>Order summary</p>
              <div className='space-y-4'>
                <dl className='flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700'>
                  <dt className='text-base font-bold text-gray-900 dark:text-white'>Total</dt>
                  <dd className='text-base font-bold text-gray-900 dark:text-white'>{formatMoney(cartTotal)}</dd>
                </dl>
              </div>
              <Button className='w-full'>Payment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
