import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from "./AccountCard";
import { AccountsSliderNavigation } from './AccountsSliderNavigation';
import { EyeIcon } from "../../../components/icons/EyeIcon";

import 'swiper/css';

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
          >
            <div className="flex items-center justify-between mb-4" slot='container-start'>
              <strong className="text-white tracking-[-1px] text-lg font-bol">
                Minhas contas
              </strong>
              <AccountsSliderNavigation />
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
