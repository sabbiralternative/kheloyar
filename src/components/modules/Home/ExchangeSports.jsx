import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGroupQuery } from "../../../hooks/group";
import HorseGreyhound from "./HorseGreyhound";

const ExchangeSports = ({ isInPlay }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventTypeId = searchParams.get("eventTypeId");
  const navigate = useNavigate();

  const { data } = useGroupQuery({ sportsType: Number(eventTypeId) || 4 });

  const filteredData = useMemo(() => {
    const filtered = Object.entries(data)
      .filter(([, value]) => value.visible === true)
      .reduce(
        (acc, [key, value]) => {
          if (value.inPlay === 1) {
            acc.inPlay[key] = value;
          } else {
            acc.upcoming[key] = value;
          }
          return acc;
        },
        { inPlay: {}, upcoming: {} },
      );

    return filtered;
  }, [data]);

  const finalData = isInPlay ? filteredData.inPlay : filteredData.upcoming;

  const navigateGameList = (eventTypeId, key) => {
    navigate(`/event-details/${eventTypeId}/${key}`);
  };

  return (
    <div className="flex flex-col gap-1 h-full">
      {eventTypeId != "7" && eventTypeId != "4339" && (
        <div className="w-full max-w-full">
          <div className="flex flex-col gap-1">
            {Object.entries(finalData).map(([key, value]) => {
              return (
                <div
                  key={key}
                  onClick={() => navigateGameList(value?.eventTypeId, key)}
                  className="flex flex-col gap-0.5"
                >
                  <div className="grid grid-cols-6 lg:grid-cols-11 p-2 bg-eventRowBg rounded-[4px] hover:bg-eventRowHoverBg/50">
                    <div className="col-span-6 lg:col-span-8 flex gap-2 items-center lg:pe-2">
                      <div className="flex flex-1 items-center gap-4">
                        {value?.inPlay === 1 && (
                          <div className="time-badge hidden lg:flex items-center justify-center text-[10px] font-semibold h-[42px] p-2 rounded-[5px] bg-inplayLabelBg">
                            <div className="relative z-[1] flex flex-col items-center justify-center leading-[1.1] text-center min-w-[54px]">
                              <div className="flex flex-col gap-1 text-[8px] font-normal items-center fall-in">
                                <span>{value?.date?.split(" ")[0]}</span>
                                <span>{value?.date?.split(" ")[1]}</span>
                              </div>
                            </div>
                            <svg
                              className="time-badge__runner"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              aria-hidden="true"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={96}
                                height={96}
                                rx={12}
                                ry={12}
                                pathLength={100}
                              />
                              <rect
                                x={2}
                                y={2}
                                width={96}
                                height={96}
                                rx={12}
                                ry={12}
                                pathLength={100}
                              />
                            </svg>
                          </div>
                        )}
                        {value?.inPlay === 1 && (
                          <div className="flex lg:hidden items-center justify-center gap-1 text-[10px] font-semibold">
                            <svg
                              width={14}
                              height={10}
                              viewBox="0 0 14 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[10px] live-blink icon-svg-class-primarySvgColor"
                              aria-label="live"
                            >
                              <path
                                d="M2.89617 0.195371C2.95815 0.257286 3.00732 0.330812 3.04087 0.411744C3.07442 0.492676 3.09169 0.579427 3.09169 0.667038C3.09169 0.754648 3.07442 0.841399 3.04087 0.922331C3.00732 1.00326 2.95815 1.07679 2.89617 1.1387C1.89579 2.13925 1.3338 3.49617 1.3338 4.91104C1.3338 6.3259 1.89579 7.68283 2.89617 8.68337C2.95984 8.74487 3.01063 8.81843 3.04557 8.89977C3.08051 8.9811 3.0989 9.06858 3.09967 9.1571C3.10044 9.24562 3.08357 9.33341 3.05005 9.41534C3.01653 9.49727 2.96703 9.57171 2.90443 9.6343C2.84183 9.6969 2.7674 9.7464 2.68547 9.77992C2.60354 9.81344 2.51575 9.83031 2.42723 9.82954C2.33871 9.82877 2.25123 9.81038 2.1699 9.77544C2.08856 9.7405 2.015 9.68971 1.9535 9.62604C-0.651167 7.02204 -0.651167 2.79937 1.9535 0.195371C2.07852 0.0703903 2.24806 0.000179927 2.42483 0.000179927C2.60161 0.000179927 2.77115 0.0703903 2.89617 0.195371ZM11.3842 0.195371C13.9882 2.80004 13.9882 7.02204 11.3842 9.62604C11.2592 9.75113 11.0896 9.82144 10.9127 9.82151C10.7359 9.82157 10.5663 9.75138 10.4412 9.62637C10.3161 9.50136 10.2458 9.33179 10.2457 9.15494C10.2456 8.97809 10.3158 8.80846 10.4408 8.68337C11.4412 7.68283 12.0032 6.3259 12.0032 4.91104C12.0032 3.49617 11.4412 2.13925 10.4408 1.1387C10.3157 1.01361 10.2455 0.843947 10.2455 0.667038C10.2455 0.490128 10.3157 0.320465 10.4408 0.195371C10.5659 0.0702772 10.7356 3.4873e-09 10.9125 0C11.0894 -3.48731e-09 11.2591 0.0702772 11.3842 0.195371ZM4.87417 2.11137C4.99915 2.23639 5.06936 2.40593 5.06936 2.5827C5.06936 2.75948 4.99915 2.92902 4.87417 3.05404C4.63147 3.29671 4.43895 3.58481 4.3076 3.9019C4.17625 4.21898 4.10864 4.55883 4.10864 4.90204C4.10864 5.24525 4.17625 5.5851 4.3076 5.90218C4.43895 6.21926 4.63147 6.50736 4.87417 6.75004C4.93606 6.81198 4.98515 6.8855 5.01863 6.96641C5.05212 7.04733 5.06933 7.13404 5.0693 7.22161C5.06927 7.30917 5.05199 7.39587 5.01845 7.47676C4.98492 7.55765 4.93577 7.63114 4.87383 7.69304C4.81189 7.75493 4.73837 7.80402 4.65746 7.8375C4.57654 7.87099 4.48983 7.8882 4.40226 7.88817C4.3147 7.88814 4.228 7.87086 4.14711 7.83732C4.06622 7.80379 3.99273 7.75464 3.93083 7.6927C3.19072 6.95256 2.77493 5.94873 2.77493 4.90204C2.77493 3.85534 3.19072 2.85151 3.93083 2.11137C3.99275 2.04939 4.06627 2.00021 4.14721 1.96666C4.22814 1.93311 4.31489 1.91585 4.4025 1.91585C4.49011 1.91585 4.57686 1.93311 4.65779 1.96666C4.73873 2.00021 4.81225 2.04939 4.87417 2.11137ZM9.51283 2.11137C10.2529 2.85151 10.6687 3.85534 10.6687 4.90204C10.6687 5.94873 10.2529 6.95256 9.51283 7.6927C9.3871 7.81414 9.2187 7.88134 9.0439 7.87982C8.8691 7.8783 8.70189 7.80819 8.57829 7.68458C8.45468 7.56098 8.38457 7.39377 8.38305 7.21897C8.38153 7.04417 8.44873 6.87577 8.57017 6.75004C8.81287 6.50736 9.00539 6.21926 9.13673 5.90218C9.26808 5.5851 9.33569 5.24525 9.33569 4.90204C9.33569 4.55883 9.26808 4.21898 9.13673 3.9019C9.00539 3.58481 8.81287 3.29671 8.57017 3.05404C8.44873 2.9283 8.38153 2.7599 8.38305 2.5851C8.38457 2.41031 8.45468 2.2431 8.57829 2.11949C8.70189 1.99589 8.8691 1.92577 9.0439 1.92425C9.2187 1.92274 9.3871 1.98993 9.51283 2.11137ZM6.72217 3.95804C6.98738 3.95804 7.24174 4.06339 7.42927 4.25093C7.61681 4.43847 7.72217 4.69282 7.72217 4.95804C7.72217 5.22325 7.61681 5.47761 7.42927 5.66514C7.24174 5.85268 6.98738 5.95804 6.72217 5.95804C6.45695 5.95804 6.2026 5.85268 6.01506 5.66514C5.82752 5.47761 5.72217 5.22325 5.72217 4.95804C5.72217 4.69282 5.82752 4.43847 6.01506 4.25093C6.2026 4.06339 6.45695 3.95804 6.72217 3.95804Z"
                                fill="#00B181"
                              />
                            </svg>
                            <span className="text-inplayLabelBg live-blink">
                              LIVE
                            </span>
                            <div className="flex items-center gap-0.5 text-eventTimeText">
                              <span>{value?.date?.split(" ")[0]}</span> |{" "}
                              <span>{value?.date?.split(" ")[1]}</span>
                            </div>
                          </div>
                        )}

                        <div className="hidden lg:flex flex-col gap-1 text-xs font-semibold">
                          <div className="flex gap-1 text-white font-bold text-xs leading-[1.2em] hover:underline cursor-pointer truncate">
                            <span>{value?.player1}</span>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 icon-svg-class-vsIcon"
                            >
                              <g clipPath="url(#clip0_367_8037)">
                                <rect
                                  width="19.8"
                                  height="19.8"
                                  fill="url(#paint0_radial_367_8037)"
                                />
                                <path
                                  d="M9.86932 18.0526C7.98176 18.0514 6.15263 17.3978 4.69178 16.2025C3.23093 15.0072 2.22818 13.3436 1.85339 11.4936C1.4786 9.64365 1.75482 7.72099 2.63525 6.05134C3.51569 4.38169 4.9462 3.06771 6.68448 2.33198C8.68294 1.49253 10.9328 1.4802 12.9403 2.29769C14.9479 3.11517 16.5491 4.69571 17.3927 6.69244C18.2362 8.68918 18.2532 10.939 17.4398 12.9482C16.6264 14.9574 15.0492 16.5619 13.0542 17.4096C12.0466 17.836 10.9634 18.0547 9.86932 18.0526ZM11.5211 11.3486L10.3542 11.598C10.4215 11.8699 10.544 12.1251 10.7141 12.3476C10.8841 12.5702 11.0981 12.7555 11.3427 12.892C11.8761 13.1771 12.474 13.3201 13.0787 13.3071C13.7624 13.3367 14.4364 13.1384 14.9951 12.7432C15.2343 12.5647 15.4266 12.3308 15.5555 12.0616C15.6844 11.7924 15.746 11.496 15.7351 11.1977C15.7369 10.7987 15.6144 10.409 15.3845 10.0829C15.1511 9.74774 14.6875 9.49047 14.0027 9.31865L12.8693 9.03441C12.2539 8.88289 11.9417 8.61259 11.9417 8.2335C11.9404 8.11791 11.9665 8.00366 12.0179 7.9001C12.0692 7.79655 12.1444 7.70664 12.2372 7.63774C12.4886 7.46593 12.7903 7.38344 13.0942 7.4035C13.7357 7.4035 14.1496 7.65804 14.3248 8.16107L15.4672 7.87774C15.4052 7.65025 15.2966 7.43813 15.1482 7.25487C14.9998 7.0716 14.815 6.9212 14.6054 6.81319C14.1342 6.55821 13.6053 6.42881 13.0696 6.43744C12.4576 6.41303 11.8564 6.60389 11.3705 6.97683C11.1559 7.14757 10.9842 7.36606 10.8689 7.6149C10.7536 7.86374 10.6981 8.13606 10.7066 8.41016C10.7053 8.70218 10.7695 8.99077 10.8945 9.25471C11.0046 9.49928 11.1772 9.71059 11.3948 9.86744C11.6933 10.0496 12.0201 10.1808 12.3617 10.2556L13.6363 10.589C13.8947 10.6289 14.1313 10.7575 14.3054 10.9526C14.4075 11.1013 14.4621 11.2776 14.4617 11.458C14.4606 11.5832 14.4285 11.7062 14.3685 11.816C14.3084 11.9258 14.2222 12.0192 14.1175 12.0877C13.8246 12.2742 13.4801 12.363 13.1336 12.3417C12.7501 12.361 12.3686 12.2753 12.0302 12.0938C11.8976 12.0125 11.7837 11.9041 11.696 11.7757C11.6082 11.6473 11.5487 11.5017 11.5211 11.3486ZM4.43448 6.53926L6.48993 13.2041H7.71054L9.79569 6.53926H8.79569L7.23296 11.6465L5.70387 6.53926H4.43448Z"
                                  fill="#FFC21D"
                                />
                                <path
                                  d="M16.5874 3.85547L15.7877 3.1091L18.6583 0.249105C18.6583 0.249105 19.1211 -0.276349 19.5802 0.196985C19.6416 0.251592 19.6897 0.319597 19.7207 0.395747C19.7517 0.471896 19.7647 0.554154 19.7589 0.63616C19.753 0.718167 19.7284 0.797724 19.6869 0.868695C19.6454 0.939667 19.5881 1.00015 19.5195 1.04547L16.5874 3.85547Z"
                                  fill="#FFC21D"
                                />
                                <path
                                  d="M3.2119 15.9453L4.01159 16.6917L1.14098 19.5517C1.14098 19.5517 0.678257 20.0771 0.219166 19.6038C0.157706 19.5492 0.109631 19.4812 0.0786371 19.405C0.0476438 19.3289 0.0345678 19.2466 0.0404254 19.1646C0.046283 19.0826 0.0709079 19.0031 0.11241 18.9321C0.153912 18.8611 0.211178 18.8006 0.279776 18.7553L3.2119 15.9453Z"
                                  fill="#FFC21D"
                                />
                              </g>
                              <defs>
                                <radialGradient
                                  id="paint0_radial_367_8037"
                                  cx={0}
                                  cy={0}
                                  r={1}
                                  gradientUnits="userSpaceOnUse"
                                  gradientTransform="translate(9.9 9.9) scale(14.0007)"
                                >
                                  <stop />
                                  <stop offset="0.166667" />
                                  <stop offset="0.333333" />
                                  <stop offset="0.5" stopOpacity="0.55" />
                                  <stop offset="0.666667" stopOpacity={0} />
                                  <stop offset="0.833333" stopOpacity={0} />
                                  <stop offset={1} stopOpacity={0} />
                                </radialGradient>
                                <clipPath id="clip0_367_8037">
                                  <rect
                                    width="19.8"
                                    height="19.8"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            <span>{value?.player2}</span>
                          </div>
                          <span>{value?.timeStatus}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {value?.isTv === 1 && (
                          <svg
                            width={15}
                            height={14}
                            viewBox="0 0 15 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 icon-svg-class-primarySvgColor"
                            aria-label="TV"
                          >
                            <path
                              d="M13.3438 9.3125V1.3125H1.34375V9.3125H13.3438ZM13.3438 0C13.6979 0 14.0104 0.135417 14.2812 0.40625C14.5521 0.65625 14.6875 0.958333 14.6875 1.3125V9.3125C14.6875 9.66667 14.5521 9.97917 14.2812 10.25C14.0104 10.5208 13.6979 10.6562 13.3438 10.6562H8.6875V12H10V13.3125H4.6875V12H6V10.6562H1.34375C0.989583 10.6562 0.677083 10.5208 0.40625 10.25C0.135417 9.97917 0 9.66667 0 9.3125V1.3125C0 0.958333 0.135417 0.65625 0.40625 0.40625C0.677083 0.135417 0.989583 0 1.34375 0H13.3438Z"
                              fill="#ECB024"
                            />
                          </svg>
                        )}

                        {value?.isBookmaker === 1 && (
                          <div className="flex items-center justify-center h-5 w-5 text-white text-[8px] font-black px-2 py-1 rounded-[2px] bg-dashboardGamesTabsBg">
                            BM
                          </div>
                        )}
                        {value?.isFancy === 1 && (
                          <div className="flex items-center justify-center h-5 w-5 text-white text-[8px] font-black px-2 py-1 rounded-[2px] bg-dashboardGamesTabsBg">
                            F
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex lg:hidden flex-col items-center col-span-6 pb-2 w-full gap-1 text-xs font-semibold">
                      <div className="flex gap-1 text-white font-bold text-xs leading-[1.2em] hover:underline cursor-pointer truncate text-wrap">
                        <span>{value?.player1}</span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 icon-svg-class-vsIcon"
                        >
                          <g clipPath="url(#clip0_367_8037)">
                            <rect
                              width="19.8"
                              height="19.8"
                              fill="url(#paint0_radial_367_8037)"
                            />
                            <path
                              d="M9.86932 18.0526C7.98176 18.0514 6.15263 17.3978 4.69178 16.2025C3.23093 15.0072 2.22818 13.3436 1.85339 11.4936C1.4786 9.64365 1.75482 7.72099 2.63525 6.05134C3.51569 4.38169 4.9462 3.06771 6.68448 2.33198C8.68294 1.49253 10.9328 1.4802 12.9403 2.29769C14.9479 3.11517 16.5491 4.69571 17.3927 6.69244C18.2362 8.68918 18.2532 10.939 17.4398 12.9482C16.6264 14.9574 15.0492 16.5619 13.0542 17.4096C12.0466 17.836 10.9634 18.0547 9.86932 18.0526ZM11.5211 11.3486L10.3542 11.598C10.4215 11.8699 10.544 12.1251 10.7141 12.3476C10.8841 12.5702 11.0981 12.7555 11.3427 12.892C11.8761 13.1771 12.474 13.3201 13.0787 13.3071C13.7624 13.3367 14.4364 13.1384 14.9951 12.7432C15.2343 12.5647 15.4266 12.3308 15.5555 12.0616C15.6844 11.7924 15.746 11.496 15.7351 11.1977C15.7369 10.7987 15.6144 10.409 15.3845 10.0829C15.1511 9.74774 14.6875 9.49047 14.0027 9.31865L12.8693 9.03441C12.2539 8.88289 11.9417 8.61259 11.9417 8.2335C11.9404 8.11791 11.9665 8.00366 12.0179 7.9001C12.0692 7.79655 12.1444 7.70664 12.2372 7.63774C12.4886 7.46593 12.7903 7.38344 13.0942 7.4035C13.7357 7.4035 14.1496 7.65804 14.3248 8.16107L15.4672 7.87774C15.4052 7.65025 15.2966 7.43813 15.1482 7.25487C14.9998 7.0716 14.815 6.9212 14.6054 6.81319C14.1342 6.55821 13.6053 6.42881 13.0696 6.43744C12.4576 6.41303 11.8564 6.60389 11.3705 6.97683C11.1559 7.14757 10.9842 7.36606 10.8689 7.6149C10.7536 7.86374 10.6981 8.13606 10.7066 8.41016C10.7053 8.70218 10.7695 8.99077 10.8945 9.25471C11.0046 9.49928 11.1772 9.71059 11.3948 9.86744C11.6933 10.0496 12.0201 10.1808 12.3617 10.2556L13.6363 10.589C13.8947 10.6289 14.1313 10.7575 14.3054 10.9526C14.4075 11.1013 14.4621 11.2776 14.4617 11.458C14.4606 11.5832 14.4285 11.7062 14.3685 11.816C14.3084 11.9258 14.2222 12.0192 14.1175 12.0877C13.8246 12.2742 13.4801 12.363 13.1336 12.3417C12.7501 12.361 12.3686 12.2753 12.0302 12.0938C11.8976 12.0125 11.7837 11.9041 11.696 11.7757C11.6082 11.6473 11.5487 11.5017 11.5211 11.3486ZM4.43448 6.53926L6.48993 13.2041H7.71054L9.79569 6.53926H8.79569L7.23296 11.6465L5.70387 6.53926H4.43448Z"
                              fill="#FFC21D"
                            />
                            <path
                              d="M16.5874 3.85547L15.7877 3.1091L18.6583 0.249105C18.6583 0.249105 19.1211 -0.276349 19.5802 0.196985C19.6416 0.251592 19.6897 0.319597 19.7207 0.395747C19.7517 0.471896 19.7647 0.554154 19.7589 0.63616C19.753 0.718167 19.7284 0.797724 19.6869 0.868695C19.6454 0.939667 19.5881 1.00015 19.5195 1.04547L16.5874 3.85547Z"
                              fill="#FFC21D"
                            />
                            <path
                              d="M3.2119 15.9453L4.01159 16.6917L1.14098 19.5517C1.14098 19.5517 0.678257 20.0771 0.219166 19.6038C0.157706 19.5492 0.109631 19.4812 0.0786371 19.405C0.0476438 19.3289 0.0345678 19.2466 0.0404254 19.1646C0.046283 19.0826 0.0709079 19.0031 0.11241 18.9321C0.153912 18.8611 0.211178 18.8006 0.279776 18.7553L3.2119 15.9453Z"
                              fill="#FFC21D"
                            />
                          </g>
                          <defs>
                            <radialGradient
                              id="paint0_radial_367_8037"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(9.9 9.9) scale(14.0007)"
                            >
                              <stop />
                              <stop offset="0.166667" />
                              <stop offset="0.333333" />
                              <stop offset="0.5" stopOpacity="0.55" />
                              <stop offset="0.666667" stopOpacity={0} />
                              <stop offset="0.833333" stopOpacity={0} />
                              <stop offset={1} stopOpacity={0} />
                            </radialGradient>
                            <clipPath id="clip0_367_8037">
                              <rect width="19.8" height="19.8" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{value?.player2}</span>
                      </div>
                      <span>{value?.timeStatus}</span>
                    </div>
                    <div className="col-span-6 lg:col-span-3 flex items-center justify-center gap-2">
                      <div className="w-full h-[40px] bg-[#43CEED] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                        <div className="flex flex-col items-center justify-center py-[15px]">
                          <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                            {value?.[0]?.ex?.availableToBack?.[0]?.price || "-"}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[40px] bg-[#F796FF] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                        <div className="flex flex-col items-center justify-center py-[15px]">
                          <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                            {value?.[0]?.ex?.availableToLay?.[0]?.price || "-"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full h-[40px] bg-[#43CEED] rounded-md">
                        <span className="text-black text-xs font-semibold leading-[1.1000000146719127em] text-center">
                          {value?.[2]?.ex?.availableToBack?.[0]?.price || "-"}
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-full h-[40px] bg-[#F796FF] rounded-md">
                        <span className="text-black text-xs font-semibold leading-[1.1000000146719127em] text-center">
                          {value?.[2]?.ex?.availableToLay?.[0]?.price || "-"}
                        </span>
                      </div>
                      <div className="w-full h-[40px] bg-[#43CEED] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                        <div className="flex flex-col items-center justify-center py-[15px]">
                          <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                            {value?.[1]?.ex?.availableToBack?.[0]?.price || "-"}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-[40px] bg-[#F796FF] cursor-pointer hover:opacity-80 transition-opacity rounded-md">
                        <div className="flex flex-col items-center justify-center py-[15px]">
                          <span className="text-black text-xs font-semibold leading-[1.0769230769230769em] text-center">
                            {value?.[1]?.ex?.availableToLay?.[0]?.price || "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-eventRowRadialGradient" />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {eventTypeId === "7" ||
        (eventTypeId === "4339" && data?.length > 0 && (
          <HorseGreyhound data={data} eventTypeId={eventTypeId} />
        ))}
    </div>
  );
};

export default ExchangeSports;
