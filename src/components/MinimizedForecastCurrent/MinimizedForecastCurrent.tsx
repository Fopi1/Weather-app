import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import "./MinimizedForecastCurrent.scss";
import "./MinimizedForecastCurrentAnimation.scss";
import Sunny from "@WeatherIcons/Sunny/Sunny";
import Cloudy from "@WeatherIcons/Cloudy/Cloudy";
import { useAppDispatch, useAppSelector } from "/src/store/store";
import { revealForecast } from "/src/store/forecastToggleSlicer";

const MinimizedForecastCurrent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isForecastRevealed } = useAppSelector(
    (state) => state.forecastToggle
  );
  const swipeHandlers = useSwipeable({
    onSwipedDown: () => dispatch(revealForecast()),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (isForecastRevealed) {
      navigate("/Forecast");
    }
  });

  return (
    <CSSTransition
      in={isForecastRevealed}
      timeout={100000}
      classNames="openForecast"
    >
      <div className="minimizedWrapper openForecast" {...swipeHandlers}>
        <div className="minimizedForecastCurrent">
          <div className="minimizedStroke"></div>
          <div className="minimizedForecastCurrentInner">
            <div className="minimizedWeatherIconWrapper">
              <Cloudy>
                <Sunny />
              </Cloudy>
            </div>
            <div className="minimizedLocationDate">
              <span className="minimizedDate">Today</span>
              <span className="minimizedLocation">Lucknow</span>
            </div>
            <div className="minimizedWeatherInfo">
              <span className="minimizedTemperature">18</span>
              <span className="minimizedWeather">Cloudy</span>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default MinimizedForecastCurrent;
