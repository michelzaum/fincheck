import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from './SliderNavigation';
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { useAccountController } from './useAccountsController';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';

import 'swiper/css';
import { cn } from '../../../../../app/utils/cn';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
    isLoading,
    accounts,
  } = useAccountController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isLoading && (
        <div className='w-full h-full flex items-center justify-center'>
          <Spinner className='text-teal-950/50 fill-white w-10 h-10' />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md',
                )}
              >
                {formatCurrency(areValuesVisible ? 167990.37 : 0)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValueVisibility}
              >
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-40 md:mt-0">
            {accounts.length === 0 && (
              <>
                <div className="mb-4">
                  <strong className="text-white tracking-[-1px] text-lg font-bol">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className='mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center
                    gap-4 text-white
                  '
                >
                  <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
                    <PlusIcon className='w-6 h-6' />
                  </div>
                  <span className='tracking-[0.5px] font-medium block w-32 text-center'>
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                  onSlideChange={swiper => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    })
                  }}
                >
                  <div className="flex items-center justify-between mb-4" slot='container-start'>
                    <strong className="text-white tracking-[-1px] text-lg font-bol">
                      Minhas contas
                    </strong>
                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>
                    <SwiperSlide>
                      <AccountCard
                        color="#7950F2"
                        name="Nubank"
                        balance={areValuesVisible ? 1000.23 : 0}
                        type="CHECKING"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        color="#333333"
                        name="XP"
                        balance={areValuesVisible ? 146.97 : 0}
                        type="INVESTMENT"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        color="#0f0"
                        name="Carteira"
                        balance={areValuesVisible ? 1245.90 : 0}
                        type="CASH"
                      />
                    </SwiperSlide>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
