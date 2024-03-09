import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from './SliderNavigation';
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { useAccountController } from './useAccountController';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';

import 'swiper/css';
import { cn } from '../../../../../app/utils/cn';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValueVisibility,
  } = useAccountController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong
            className={cn(
              'text-2xl tracking-[-1px] text-white',
              !areValuesVisible && 'blur-md',
            )}
          >
            {formatCurrency(1000)}
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
                  balance={1000.23}
                  type="CHECKING"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  color="#333333"
                  name="XP"
                  balance={1000.23}
                  type="INVESTMENT"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  color="#0f0"
                  name="Carteira"
                  balance={1000.23}
                  type="CASH"
                />
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
