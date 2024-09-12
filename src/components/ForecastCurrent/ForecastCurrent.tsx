import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";
import "./ForecastCurrent.scss";
import "./ForecastCurrentAnimation.scss";
import Cloudy from "@WeatherIcons/Cloudy/Cloudy";
import Sunny from "@WeatherIcons/Sunny/Sunny";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { closeForecast } from "@/store/forecastToggleSlicer";

const ForecastCurrent: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isForecastRevealed } = useAppSelector(
    (state) => state.forecastToggle
  );
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => dispatch(closeForecast()),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (!isForecastRevealed) {
      navigate("/DetailedForecast");
    }
  });

  return (
    <div className="currentWrapper" {...swipeHandlers}>
      <CSSTransition
        in={!isForecastRevealed}
        timeout={1000}
        classNames="closeForecast"
      >
        <div className="forecastCurrent closeForecast">
          <div className="currentStroke"></div>
          <div className="forecastCurrentInner">
            <div className="currentDetails">
              <div className="currentWeatherIconWrapper">
                <Cloudy>
                  <Sunny />
                </Cloudy>
              </div>
              <div className="currentWeatherInfo">
                <span className="currentTemperature">18</span>
                <span className="currentWeather">Cloudy</span>
              </div>
            </div>
            <div className="currentLocationDate">
              <span className="currentDate">Today</span>
              <span className="currentLocation">Lucknow</span>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ForecastCurrent;
