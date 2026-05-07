/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Rules = () => {
  const [index, setIndex] = useState(null);

  const handleChangeIndex = (i) => {
    if (index === i) {
      setIndex(null);
    } else {
      setIndex(i);
    }
  };
  return (
    <div className="relative flex flex-col gap-1 px-[1px] h-full md:pb-0 overflow-auto scrollbar-hide w-full">
      <div
        id="scrollToTopDiv"
        className="flex flex-col gap-1 h-full overflow-auto scrollbar-hide"
      >
        <div className="flex flex-1 bg-black pb-[75px]">
          <div className="w-full h-full scrollbar-hide">
            <div className="flex flex-col w-full px-4 py-4 h-full rounded border border-[#00000020] text-white overflow-auto">
              <div className="flex flex-0 w-full bg-black py-2 px-4">
                <h3 className="text-lg font-medium">Rules</h3>
              </div>
              <div className="flex flex-col mt-4 flex-1 gap-1">
                <div>
                  <button
                    onClick={() => handleChangeIndex(0)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Deposit Bonus</span>
                    {index === 0 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 0 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              DEPOSIT BONUS = 5% IMPS Deposit (APPLIED FOR EVERY
                              IMPS DEPOSIT)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              PAYMENT METHOD = BANK TRANSFER (IMPS)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">MAX. BONUS = 500</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              TURNOVER = 3X ROLLING ON DEPOSIT AMOUNT
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              CATEGORIES APPLIED = SPORTS [CRICKET]
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">EXPIRY DAYS= 7</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              NOTE = ROLLING WILL BE APPLICABLE ONLY ON
                              EXCHANHGE'S CRICKET MACTHES.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              (NOT APPLICABLE ON SPORTSBOOK AND PREMIUM MARKETS)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(1)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Deposit wagering</span>
                    {index === 1 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 1 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All the deposits require 50% wagering
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              e.g: If you deposit 100 then required wagering =
                              50
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Please refer to Deposit turnover report for
                              progress of wagering on each deposit.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(2)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Deposit Limits</span>
                    {index === 2 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 2 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Minimum deposit amount : ₹500 /-
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(3)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Withdraw Limits</span>
                    {index === 3 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 3 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Any withdrawal below ₹100 is not allowed.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              -&gt; If the balance is greater than ₹500 -&gt;
                              Minimum withdrawal amount : ₹500 /- .
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              -&gt; If the balance is less than or equal to 500,
                              Minimum withdrawal amount : Available balance .
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              You can withdraw only 4 times in a day.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(4)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Football Fancy</span>
                    {index === 4 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 4 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example in case of vpn/robot-use/multiple
                              entry from same IP/ multiple bets at same time
                              (Punching) and others.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Note : only winning bets will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tournament Total Goals, Team Total Goals
                              goals.scored in 90 minutes or in extra-time will
                              count. Goals scored in penalty shootouts do not
                              count.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tournament Corners - Only corners taken in 90
                              minutes count.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tournament Penalties Missed/Converted - Penalties
                              taken in 90 minutes, extra-time and penalty
                              shootouts all count.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If a penalty has to be re-taken the previous
                              disallowed penalty(ies) do not count.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(5)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Big Bash League</span>
                    {index === 5 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 5 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              - If BBL fixture of 44 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided (Match abandoned due to rain/bad light will
                              not be considered in this)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              - At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Highest Innings run - Only First Innings is
                              Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Lowest Innings run - Only First Innings is
                              Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Highest Total Runs in Single Match of BBL:
                              Maximum Runs Scored by 2 Teams in Single Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. Largest Margin Win by Runs of BBL : Maximum
                              Runs Margin Win by Any Team. Example : PS 210 in
                              1st Inn and SS 150 in 2nd Inn Means PS Win by 60
                              run Margin.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. Highest Partnership Runs in BBL: Both Innings
                              are Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              6. Highest Partnership Balls in BBL: Both Innings
                              are Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              7. Highest Partnership Boundaries in BBL: Both
                              Innings are Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              8. In fastest fifty always the first 50 runs will
                              be considered, for example of S Smith scores 1st
                              fifty in 17 balls and scores 100 in next 14 balls,
                              fastest 50 will be given based on the balls for
                              the 1st fifty runs
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              9. Highest Run Scorer Runs : Total Runs Scored by
                              An Individual Batsman in Full Tournament (BBL
                              GOLDEN BAT)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              10. Highest Wicket Taker Wickets: Total Wickets
                              Taken by a Bowler in Full Tournament (BBL GOLDEN
                              ARM)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              11. How Many time 5 or More Wickets taken by
                              Bowlers : Number of time 5 or More Wickets taken
                              by Bowlers. In Case Same Bowler 2 time 5 or More
                              Wickets taken means Result Counted as 2.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              12. Total 1st Over Runs : Average 6 Runs will be
                              given in case match abandoned or over reduced. 1st
                              Inn Match 1st Over Runs Only Considered
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              13. Total 4's: Average 26 Fours will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              14. Total 6's: Average 12 Sixes will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              15. Total Boundaries: Average 38 Boundaries will
                              be given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              16. Total Wickets - Average will 13 Wickets be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              17. Total Wides - Average 8 Wides will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              18. Total Extras - Average 16 Extras will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              19. Total Caught outs: Average 9 Caught out will
                              be given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              20. Total Bowled:- Average 2 Bowled out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              21. Total LBW:- Average 1 LBW will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              22. Total Run out:- Average 1 Run out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              23. Total 30's: Average 3 Thirties will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              24. Total 50's: Average 1 Fifties will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              25. Total Duckouts in BBL : Average 1 Duckout will
                              be given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              26. Total Single Digit Scorers in BBL : Average 6
                              Single Digit Scorers will be given in case match
                              abandoned or over reduced.Duck outs Not Considered
                              in this Event. If Not out Batsman/Injured Batsman
                              facing One Legal Delivery and nothing scored ('0')
                              means Considered as Single Digit
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              27. Total Double Digit Scorers in BBL : Average 9
                              Double Digit Scorers will be given in case match
                              abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              28. Total Players Facing 25 plus Balls in BBL :
                              Average 3 Players will be given in case match
                              abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              29. Total Impact Overs in BBL : Average 14 Impact
                              Over will be given in case match abandoned or over
                              reduced.Number of over’s scored 10 runs and above.
                              If a team all out or Match Resulted in 15.2 then
                              considered as 16 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              30. Total No Boundaries Overs in BBL : Average 14
                              No Boundaries Over will be given in case match
                              abandoned or over reduced.If Match Resulted in 2nd
                              Inn 17 Overs Means How Many Overs Boundaries not
                              Came in that 37 Overs Only Considered.Balance 3
                              Overs not Considered in this.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              31. Total Four Hitters in BBL : Average 9 Four
                              Hitter will be given in case match abandoned or
                              over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              32. Total Six Hitters in BBL : Average 6 Six
                              Hitter will be given in case match abandoned or
                              over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              33. Total Wicket Takers in BBL : Average 7 Wicket
                              Taker will be given in case match abandoned or
                              over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              34. Total Bowler Giving 30plus Runs in BBL :
                              Average 5 Bowlers will be given in case match
                              abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              35. Total Highest Scoring Over Runs in BBL: Total
                              of Every Match Highest Scoring Over Runs. Average
                              20 Runs will be given in case match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              36. Highest Match 1st Over Run of BBL : Only First
                              Innings is Valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              37. Highest 1st 6 over run: Only First Innings is
                              Valid.Will not consider if over reduce before
                              completion 6 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              38. Highest 1st 10 over run : Only First Innings
                              is Valid.Will not consider if over reduce before
                              completion 10 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              39. Highest
                              4s,6s,Boundaries,Wickets,Wides,Extras,Caught
                              Outs,Bowled,Lbw, Runouts,30s,50s, Duckouts,Single
                              Digit Scorers, Double Digit Scorers,Players 25+
                              balls, Impact Overs, Noboundary Overs,Four
                              Hitter,Six Hitter,Wicket Takers and Bowler 30+
                              Runs in individual match: All Both Innings are
                              Counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              40. Highest Scoring Over Runs in BBL: Both Innings
                              are Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              41. Most Balls Faced By a Batsman of BBL : Maximum
                              balls Faced by an Individual Batsman in the Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              42. Most 4's by a Batsman in an Inn of BBL :
                              Maximum 4s Hitted by an Individual Batsman in any
                              Single Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              43. Most 6's by a Batsman in an Inn of BBL :
                              Maximum 6s Hitted by an Individual Batsman in any
                              Single Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              44. Most Boundaries Given by a Bowler in an Inn of
                              BBL : Maximum Boundaries Conceded By Single Bowler
                              in His 4 Overs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              45. Most Dotballs By a Bowler in an Inn of BBL :
                              Maximum Dotballs By Single Bowler in His 4 Overs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              46. Most Runs Given by Bowler in an Inning of BBL
                              : Maximum Runs conceded by a individual Bowler in
                              an Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              47. Most 4s hitted by a Batsman of BBL : Maximum
                              Fours Hitted by Single Batsman in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              48. Most 6s hitted by a Batsman of BBL : Maximum
                              Sixes Hitted by Single Batsman in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              49. Most 50s Scored by a Batsman of BBL : Maximum
                              50s Scored by Single Batsman in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              50. Most 4s,6s,Wide,Extras,Caught
                              Outs,Bowled,LBW,Single Digit Scorers, Double Digit
                              Scorers, Four Hitters,Six Hitters and Wicket
                              Takers in an Innings Of the Match : Considered For
                              Maximum Reached Any Innings.All Both Innings
                              Considered as Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              51. Super over will not be included
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              - If the match starts Over Reduced Game or 20 Over
                              Game, after the balls are reduced due to rain
                              interrupting means comparison Events like Highest
                              4s,6s, boundaries,30s,50s,
                              Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single
                              Digit Scorers, Double Digit Scorers and Most
                              4s,6s,boundaries,30s,50s, Caught
                              outs,Bowled,Duckout, wicket Keeper Dismissals all
                              are considered for Result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              - Example : If a match started as 20 Overs game
                              after rain Overs reduced to 16 Overs match, in
                              that match Maximum 6s reached means that Value
                              considered for Result
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(6)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">WBBL Tournament Rules</span>
                    {index === 6 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 6 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If WBBL fixture of 43 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided (Match abandoned due to rain/bad light will
                              not be considered in this) At any situation if
                              result is given for any particular event based on
                              the rates given for the same, then the particular
                              result will be considered valid, similarly if the
                              tournament gets canceled due to any reason the
                              previously given result will be considered valid.
                              Management decision will be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Highest innings run - Only First innings is
                              valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Highest Partnership Run: Both Innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Highest Run Scorer Runs: Total Runs Scored by
                              An Individual Batsman in Full Tournament. (WBBL
                              Golden Bat).
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. Total 4's: Average 30 Fours will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. Total 6's: Average 5 Sixes will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              6. Total Boundaries: Average 35 Boundaries will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              7. Total 30's: Average 2 Thirties will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              8. Total 50's: Average 1 Fifties will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              9. Total Wickets - Average will 13 Wickets be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              10. Total Wides - Average 9 Wides will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              11. Total No balls:- Average 1 No ball will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              12. Total Extras - Average 16 Extras will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              13. Total Caught outs: Average 8 Caught out will
                              be given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              14. Total Bowled:- Average 2 Bowled out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              15. Total LBW:- Average 1 LBW will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              16. Total Run out:- Average 1 Run out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              17. Total Duckouts : Average 1 Duckout will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              18. Total Single Digit Scorers : Average 7 Single
                              Digit Scorers will be given in case match
                              abandoned or over reduced. Duck outs Not
                              Considered in this Event. If Not out
                              Batsman/Injured Batsman facing One Legal Delivery
                              and nothing scored ('0') means Considered as
                              Single Digit
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              19. Total Double Digit Scorers: Average 8 Double
                              Digit Scorers will be given in case match
                              abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              20. Total of Impact Overs : Average 10 Impact
                              Overs will be given in case match abandoned or
                              over reduced. Number of over’s scored 10 runs and
                              above. If a team all out or Match Resulted in 15.1
                              then considered as 16 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              21. Total 50+ Partnerships - Average 2 Fifty plus
                              Partnerships will be given in case match abandoned
                              or over reduced. 50 and 50 Above Partnerships All
                              Counted in this.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              22. Highest 1st 6 over run: Both Innings are
                              Valid. Will not consider if over reduce before
                              completion 6 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              23. Highest 1st 10 over run : Both Innings are
                              Valid. Will not consider if over reduce before
                              completion 10 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              24. Highest
                              4s,6s,30s,50s,Wickets,Wides,Extras,Caught
                              Outs,Bowled,Lbw,Runouts,Duckouts,Single Digit
                              Scorers,Double Digit Scorers,50+ Pships and
                              Imapact Overs in individual match: All Both
                              innings are Counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              25. Highest Scoring Over Runs : Maximum Runs
                              Scored in any Single Over in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              26. Most
                              4s,6s,Boundaries,30s,50s,Wides,Extras,Caught
                              Outs,Bowled,Duckouts and Impact Overs in an
                              Innings Of the Match : Considered For Any Innings.
                              All Both Innings Considered as Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              27. Most 4's by individual batsman in a Match :
                              Maximum 4s Hitted by an Individual Batsman in any
                              Single Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              28. Most 6's by individual batsman in a Match :
                              Maximum 6s Hitted by an Individual Batsman in any
                              Single Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              29. Most Balls Faced By a Batsman : Maximum balls
                              Faced by an Individual Batsman in the Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              30. Most runs given by Bowler in an Inning :
                              Maximum Runs conceded by a individual Bowler in an
                              Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              31. Most wickets by Bowler in an inning : Maximum
                              Wickets taken by a individual Bowler in an Innings
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              32. If the match starts as a 20 Over game, after
                              the balls are reduced due to rain interrupting
                              means comparison Events like Highest
                              4s,6s,boundaries,30s,50s,Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single
                              Digit Scorers,Double Digit Scorers and Most
                              4s,6s,boundaries,30s,50s,Caught
                              outs,Bowled,Duckout,wicket Keeper Dismissals all
                              are considered for Result. Example : If a match
                              started as 20 Overs game after rain Overs reduced
                              to 16 Overs match, in that match Maximum 6s
                              reached means that Value considered for Result of
                              Highest 6s in Individual Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              34. Super over will not be included.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              35. Lowest innings run (1st Inn) - Only First
                              innings is valid. 1st Inning playing team must be
                              Played 20 Overs or If team get all out means Only
                              considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              36. Lowest innings run (Both Inn) - Both innings
                              are valid.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(7)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Lunch Favourite</span>
                    {index === 7 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 7 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The team which is favourite at lunch will be
                              considered as lunch favourite or the team which is
                              favourite after first inning last ball will be
                              considered as lunch favourite in our exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In any circumstances management decision will be
                              final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case of tie in T20 or one day in lunch
                              favourite game, all bets will be deleted in our
                              exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case overs are reduced in a match, the team
                              which favourite at lunch will be considered as
                              lunch favourite.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example :- if match is reduced to 18 over per
                              side in t20 or Oneday then after 18 over the team
                              which is favourite at lunch will be considered as
                              lunch favourite.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case of weather, 1st innings match overs are
                              reduced and direct target is given to team which
                              will bat in 2nd inning then lunch favourite will
                              be considered after target is given at lunch.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example :- in T20 match rain comes at 14 over
                              and match is interrupted due to rain and direct
                              target is given to 2nd batting team, then team
                              which is favourite in match odds after target is
                              given in match, will be considered as lunch
                              favourite.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(8)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Bookmaker</span>
                    {index === 8 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 8 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of vpn/robot-use/multiple entry
                              from same IP/ multiple bets at the same time
                              (Punching) and others. Note : only winning bets
                              will be voided...
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Due to any reason any team will be getting
                              advantage or disadvantage we are not concerned.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of vpn/robot-use/multiple entry
                              from same IP/ multiple bets at the same time
                              (Punching) and others. Note : only winning bets
                              will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              We will simply compare both teams 10 overs score
                              higher score team will be declared winner in ODI
                              (If both teams same score means, low wickets team
                              will be declared winner. In case, both teams same
                              score &amp; same wickets means highest boundaries
                              team will be declared winner.If all same then will
                              be declared No result)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              We will simply compare both teams 6 overs higher
                              score team will be declared winner in T20 matches
                              (If both teams same score means, low wickets team
                              will be declared winner. In case, both teams same
                              score &amp; same wickets means highest boundaries
                              team will be declared winner.If all same then will
                              be declared No result)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Any query about the result or rates should be
                              contacted within 7 days of the specific event, the
                              same will not be considered valid post 7 days from
                              the event.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If two team ends up with equal points, then result
                              will be given based on the official point table
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tennis:- Advance fancy market
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the second set is not completed all bets
                              regarding this market will be voided
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If a player retires after completion of second
                              set, then the market will be settled as three sets
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Virtual Cricket</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if the video gets
                              interrupted/stopped then the same cannot be
                              continued due to any technical issues bookmaker
                              market will be voided
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(9)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Speed Cash Rules</span>
                    {index === 9 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 9 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. The customer is receiving plus on both
                              selections, making him eligible for 'Speed Cash'.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Once a customer uses 'Speed Cash', their
                              existing book will be settled, after which they
                              will need to place bets again by playing.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. A customer wins 110 points on player A and 100
                              points on player B. After deducting 3% from the
                              smaller winning amount, the customer will use
                              'Speed Cash' and can add 97 points to their main
                              balance.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. The difference between Player A winning points
                              &amp; Player B winning points must not be greater
                              than 10. Ex: Player A = 110, Player B = 130 Diff =
                              20 which is &gt; 10 so, this is not eligible for
                              speed cash
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. If you use 'Speed Cash' and the match result is
                              tied or Abandoned, your main balance won't be
                              affected.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(10)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Politic</span>
                    {index === 10 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 10 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Indian state legislative assembly elections.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              This event is to decide the winner of various
                              legislative assemblies of india.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The final result declared by election commission
                              of india for assembly elections of various states
                              of india for a particular year will be valid in
                              our exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The customers are entirely responsible for their
                              bets at all times.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be voided if the election doesn’t
                              take place in given time by election commission or
                              as per our exchange management decision.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              bets on this event at any time if we find the same
                              not to be legitimate with the certainty of the
                              outcome.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Accidental issues during assembly elections will
                              not be counted in our exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If any candidate withdraws for any reason,
                              including death, all bets on the market will be
                              valid and be settled as per the defined rules.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(11)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Fancy Market Rules</span>
                    {index === 11 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 12 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Even odd game betting rate rules.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Completed game is valid , in case due to rain
                              over are reduced or match abandoned particular
                              game will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. All bets regarding to ODD/EVEN
                              player/partnership are valid if one legal delivery
                              is being played, else the bets will be deleted.
                              Player odd/even all advance bets will be valid if
                              one legal delivery is being played in match
                              otherwise voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. If particular session result is valid then
                              particular Odd/Even session is also valid for exp.
                              15 over session result settle then 15 over
                              Odd/Even also settle if team all out 12.4
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. In any circumstances management decision will
                              be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Last Digit Lottery:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Lottery means Last Digit.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Completed Lottery Will be Settled, Incomplete
                              Lottery Will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Example :- We will Count Last Digit of
                              particular Lottery Market, if in 6 over Market the
                              Score is 42, so we will settle that particular
                              market 2 Number.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. In case of Rain or If Over Gets Reduced then
                              this Market will get Voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. If Particular Session Result is vaild then
                              Particular Lottery Market also is vaild
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Top batsman rules:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. If any player does not come as per playing
                              eleven then all bets will be get deleted for the
                              particular player.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. two players done the same run in a single match
                              (M Agarwal 30 runs and A Rayudu 30 runs, whole
                              inning top batsmen score also 30 run) then both
                              player settlement to be get done 50 percent (50% ,
                              50%)rate on their original value which given by
                              our exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.Suppose we have opened value of M Agarwal 3.75
                              back and customer place bets on 10000 @ 3.75 rates
                              and A Rayudu 3.0 back and customer place bets on
                              10000 @ 3.0 rates.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.Whole inning result announces 30 run by both
                              player then
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Rule of top batsman:-if you bet on M Agarwal you
                              will be get half amount of this rate
                              (10000*3.75/2=18750 you will get)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Rule of top batsman:-if you bet on A Rayudu you
                              will be get half amount of this rate
                              (10000*3.00/2=15000 you will get)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Top batsman only 1st inning valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For one day 50 over and for t-20 match 20 over
                              must be played for top batsmen otherwise all bets
                              will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Man of the Match Rules
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. All bets will be deleted in case the match is
                              abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. All bets will be deleted if the mentioned
                              player is not included in playing 11.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. In case Man of the Match is shared between two
                              players then Dead heat rule will be applicable,
                              For example K Perera and T Iqbal shares the Man of
                              the Match, then the settlement will be done 50% of
                              the rates accordingly.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. Rules similar to our Top Batsman rules.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Maximum Sixes by Team</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. All bets will be deleted if match abandoned or
                              over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. All bets will be deleted if both the teams hits
                              same number of sixes.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Super over will not be considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Maximum 6 or 10 over runs
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. All bets will be deleted if match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. All the bets will be deleted if both the teams
                              score is same (Runs scored in 6 or 10 overs)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. 6 overs for T20 and 10 overs for ODI
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. Both the innings are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. This fancy will be valid for 1st 6 overs of
                              both innings for T20 and 1st 10 overs of both
                              innings for ODI
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Batsman Match</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Batsman Match:- Bets for Favourite batsman from
                              the two batsman matched.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if any one of the
                              mentioned player is not included in playing 11.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted unless one ball being
                              played by both the mentioned players.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if over reduced or Match
                              abandoned.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if both the player scored
                              same run. For example H Amla and J Bairstow are
                              the batsman matched, H Amla and J Bairstow both
                              scored 38 runs then all bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both innings will be valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Opening Pair</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Bets for Favourite opening pair from the two
                              mentioned opening pair.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Runs made by both the opening player will be
                              added. For example:- J Roy scored 20 runs and J
                              Bairstow scored 30 runs result will be 50 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Highest run made by the pair will be declared
                              as winner. For example: Opening pair ENG total is
                              70 runs and Opening pair SA is 90 runs, then SA 90
                              runs will be declared as winner.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both innings will be valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Our exchange Special</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if the mentioned player
                              is not included in playing 11.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both innings will be valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Direction of First Boundary
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if the mentioned batsman
                              is not included in playing 11.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The boundary hit through off side of the stump
                              will be considered as off side four.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The boundary hit through leg side of the stump
                              will be considered as leg side four.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Boundaries through extras (byes,leg
                              byes,wide,overthrow) will not be considered as
                              valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only 1st Inning will be considered
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Fifty &amp; Century by Batsman
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted if the mentioned batsman
                              is not included in playing 11.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets will be deleted unless the batsman faces
                              one legal ball.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both Innings will be valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">1st over Fancy</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only 1st inning will be valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Odd Even Fancy</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Incompleted games will be deleted. Over reduced or
                              abandoned all bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example:-275 run SL bhav must be played 50
                              over if rain comes or any condition otherwise 275
                              run SL bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Next Man out</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Next man out fancy advance &amp; in regular. Both
                              inning will be valid. If any player does not come
                              in opening then all bets will be deleted. If over
                              reduced or abandoned then all bets will be
                              deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Caught out</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Caught out fancy in advance &amp; in regular. Both
                              inning will be valid. If over reduced or match
                              abandoned then all bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Wkt &amp; All out Fancy
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5 wkt in 10 over &amp; All out in 20 over fancy is
                              valid for both inning. If match abandoned or over
                              reduced all bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Test Match: Game Completed Fancy
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. This is the fancy for match to be won/
                              completed in which day &amp; session (Completed:
                              Game has to be completed)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. If match drawn then all the sessions will be
                              considered as lost.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Meter Fancy</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case match abandoned or over reduced mid point
                              rule will be applicable
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example: If Dhoni meter is 75 / 77 and the
                              match abandoned or over reduced, then the result
                              will be 76
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case of single difference result will be given
                              for the higher rate of the final rate (eg 53/54)
                              and match gets abandoned then the result will be
                              given as 54
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Midpoint rule is applicable for test match also.
                              However for lambi meter/ inning meter 70 overs has
                              to be played only then the same will be considered
                              as valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Maximum Boundaries:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the number of fours or sixes of both the team
                              is equal, then all bets of the respective event
                              will get voided
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Khado:- Test</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Minimum 70 over has to be played by the particular
                              team only then the Khado of the team will be
                              considered as valid, else the same will be voided
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Only Over Rule</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only over session is not completed mid over so
                              that Particular over session bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case due to rain or match abandoned particular
                              only session will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Ex :- 17.3 over team all out/run chase so only 18
                              over session bets will be deleted. in case 17.4
                              over team all out/run chase so only 18 over
                              session bets will be valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Penalty Runs Rule</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Penalty runs will be counted in all fancy. (This
                              rule applicable from 20th March 2024)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Total Match Fancy</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match Six Hitters :- Number of players who
                              hit six in a match. For Example :- 1st inning 5
                              players come for Batting and hit a six by 3
                              batsman &amp; same as a 2nd inning 6 players come
                              to bat and hit a six by 2 batsman. Result is 3 + 2
                              = 5
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match Four Hitters :- Number of players who
                              hit four in match. For example:- 1st inning 6
                              players come for batting and hit a four by 4
                              batsman &amp; same as a 2nd inning 5 players come
                              for batting and hit a four by 3 batsmen. Result is
                              4 + 3 = 7
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match Wicket Takers :- Number of bowlers who
                              take a wkt in match. For example :- 1st inning 5
                              bowlers come to bowling and wkt taker 3 bowlers
                              &amp; same as a 2nd inning 4 bowlers come to
                              bowling and wkt taker 2 bowlers. Result is 3 + 2 =
                              5
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              100 balls Event: The events for 1 to 100 balls
                              will be considered valid only if the number of
                              balls mentioned has been played completely.
                              However if the balls got reduced before the
                              particular event then the same will be voided, if
                              the team batting first get all out prior to 100
                              balls the balance balls will be counted from
                              second innings. For example if team batting first
                              gets all out in 81 balls balance 19 balls will be
                              counted from second innings and that 19 balls all
                              events are counted. This same is valid for 1st
                              Innings only.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. All fancy bets will be validated when match has
                              been tied.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. All advance fancy will be suspended before toss
                              or weather condition. All advance fancy will be
                              voided if over reduced before match start.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. In case technical error or any circumstances
                              any fancy is suspended and does not resume result
                              will be given all previous bets will be valid
                              (based on haar/jeet).
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. If any case wrong rate has been given in fancy
                              that particular bets will be cancelled.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. In any circumstances management decision will
                              be final related to all exchange items. Our
                              scorecard will be considered as valid if there is
                              any mismatch in online portal
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              6. In case customer make bets in wrong fancy we
                              are not liable to delete, no changes will be made
                              and bets will be consider as confirm bet.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              7. Due to any technical error market is open and
                              result has came all bets after result will be
                              deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              8. Manual bets are not accepted in our exchange
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              9.Our exchange will provide 5 second delay in our
                              tv.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              10. Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of vpn/robot-use/multiple entry
                              from same IP/ multiple bets at same time
                              (Punching) and others. Note : only winning bets
                              will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              11. Company reserves the right to void any bets
                              (only winning bets) of any event at any point of
                              the match if the company believes there is any
                              cheating/wrong doing in that particular event by
                              the players (either batsman/bowler)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              12. Once our exchange give username and password
                              it is your responsibility to change a password.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              14. Warning:- live scores and other data on this
                              site is sourced from third party feeds and may be
                              subject to time delays and/or be inaccurate. If
                              you rely on this data to place bets, you do so at
                              your own risk. Our exchange does not accept
                              responsibility for loss suffered as a result of
                              reliance on this data.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              15.Traders will be block the user ID if find any
                              misinterpret activities, No queries accept
                              regarding.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              16. In case, company will find Ground bets, Group
                              betting, Punching bets, Multiple entries with same
                              IP or any fraud or unusual activities are detected
                              then Company will be void winning bets.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Test</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">1 Session:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.1 Complete session valid in test.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.2 Middle session and Session is not completed
                              due to Innings declared or all out so that
                              particular over considered as completed and
                              remaining over counted in next team Innings for
                              ex:- In case of Innings declared or all out In
                              131.5th over Considered as 132 over completed
                              remaining 1 over counted for 133 over middle
                              session and 3 over counted for 135 over session
                              from next team Innings and One over session and
                              Only over session is not completed due to innings
                              declared so that Particular over session bets will
                              be deleted and all out considered as valid for
                              ex:- In case of Innings declared In 131.5th over
                              so 132 over will be deleted and if all out then
                              132 over and Only 132 over will be Valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.3 1st day 1st session run minimum 25 over will
                              be played then result is given otherwise 1st day
                              1st session will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.4 1st day 2nd session run minimum 25 over will
                              be played then result is given otherwise 1st day
                              2nd session will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.5 1st day total run minimum 80 over will be
                              played then result is given otherwise 1st day
                              total run will be deleted. If a team get All Out
                              before the day stumps, the other team's 1st day
                              score will be added to 1st day total run event.
                              (i.e. AUSTRALIA got all out at 251 before the day
                              stumps, then ENGLAND hit 100 runs in the remaining
                              overs of 1st day, so the result of 1st day total
                              run event will be 351)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1.6 Test Match advance session is Valid in only
                              1st inning.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2 Test lambi/ Inning run:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2.1 Mandatory 70 over played in test lambi paari/
                              Innings run. If any team all-out or declaration
                              lambi paari/ innings run is valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2.2 In case due to weather situation match has
                              been stopped all lambi trades will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2.3 In test both lambi paari / inning run is valid
                              in advance fancy.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">3 Test batsman:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.1 In case batsmen is injured he/she is made 34
                              runs the result will be given 34 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.2 Batsman 50/100 run if batsman is injured or
                              declaration the result will be given on particular
                              run.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.3 In next men out fancy if player is injured
                              particular fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.4 In advance fancy opening batsmen is only valid
                              if same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3.5 Test match advancefancy batsman Run valid in
                              only 1st inning.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">4 Test partnership:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4.2 Partnership and player runs due to weather
                              condition or match abandoned the result will be
                              given as per score.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4.3 Advance partnership is valid in case both
                              players are different or same.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4.4 Test Match advance fancy partnership is valid
                              in only 1st inning.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5 Other fancy advance (test):-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5.1 Four, sixes, wide, wicket, extra run, total
                              run, highest over and top batsmen is valid only if
                              300 overs has been played or the match has been
                              won by any team otherwise all these fancy will be
                              deleted. Additionally all events are valid only
                              for 1st innings( this is applicable to all
                              individual team events also)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">2 Odi rule:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Session:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Match 1st over run advance fancy only 1st innings
                              run will be counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Complete session is valid in case due to rain or
                              match abandoned particular session will be
                              deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example:- 35 over run team a is playing any
                              case team A is all-out in 33 over team a has made
                              150 run the session result is validated on
                              particular run.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance session is valid in only 1st innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">50 over runs:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case 50 over is not completed all bet will be
                              deleted due to weather or any condition.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance 50 over runs is valid in only 1st innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Odi batsman runs:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case batsman is injured he/she is made 34 runs
                              the result will be given 34 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In next men out fancy if player is injured
                              particular fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In advance fancy opening batsmen is only valid if
                              same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Odi partnership runs:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance partnership is valid in case both players
                              are different or same.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only 1st inning partnerships are valid in
                              particular match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Other fancy:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Four, sixes, wide, wicket, extra run, total run,
                              highest over ,top batsman,maiden
                              over,caught-out,no-ball,run-out,fifty and century
                              are valid only match has been completed in case
                              due to rain over has been reduced all other fancy
                              will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">T20:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Session:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Match 1st over run advance fancy only 1st innings
                              run will be counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Complete session is valid in case due to rain or
                              match abandoned particular session will be
                              deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example :- 15 over run team a is playing any
                              case team a is all-out in 13 over team A has made
                              100 run the session result is validated on
                              particular run.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance session is valid in only 1st innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">20 over runs:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance 20 over run is valid only in 1st innings.
                              20 over run will not be considered as valid if 20
                              overs is not completed due to any situation
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">T20 batsman runs:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case batsman is injured he/she is made 34 runs
                              the result will be given 34 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In next men out fancy if player is injured
                              particular fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In advance fancy opening batsmen is only valid if
                              same batsmen came in opening the fancy will be
                              valid in case one batsmen is changed that
                              particular player fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              T20 partnership runs:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance partnership is valid in case both players
                              are different or same.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only 1st inning partnerships are valid in
                              particular match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st 2 &amp; 3 Wickets runs:- T20/ODI
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Advance event is valid in only 1st Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If over reduced due to rain or weather condition
                              or match abandoned the result will be given as per
                              score.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Other fancy:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              T-20 ,one day and test match in case current
                              innings player and partnership are running in
                              between match has been called off or abandoned
                              that situation all current player and partnership
                              results are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Four, sixes, wide, wicket, extra run, total run,
                              highest over and top batsman,maiden
                              over,caught-out,no-ball,run-out,fifty and century
                              are valid only match has been completed in case
                              due to rain over has been reduced all other fancy
                              will be deleted. 1st 6 over dot ball and 20 over
                              dot ball fancy only valid is 1st innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st wicket lost to any team balls meaning that any
                              team 1st wicket fall down in how many balls that
                              particular fancy at least minimum one ball have to
                              be played otherwise bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st wicket lost to any team fancy valid both
                              innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              How many balls for 50 runs any team meaning that
                              any team achieved 50 runs in how many balls that
                              particular fancy at least one ball have to be
                              played otherwise that fancy bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              How many balls for 50 runs fancy any team only
                              first inning valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st 6 inning boundaries runs any team fancy will
                              be counting only according to run scored fours and
                              sixes at least 6 over must be played otherwise
                              that fancy will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st inning 6 over boundaries runs any team run
                              like wide ,no-ball ,leg-byes ,byes and over throw
                              runs are not counted this fancy.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              How many balls face any batsman meaning that any
                              batsman how many balls he/she played that
                              particular fancy at least one ball have to be
                              played otherwise that fancy bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              How many balls face by any batsman both innings
                              valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest scoring over will be considered valid only
                              if the over is completed fully (all six deliveries
                              has to be bowled)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match 30s : How many batsman's scored 30 to
                              49 runs in full match. If a Player reached 50
                              means, Not considered in this Event
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Boundaries in 1st Power play : Number of
                              Boundaries Scored in 1st Power play, 1st Innings
                              only Valid In T20/ODI Both
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Dot balls in 1st Power play : Number of Dot
                              balls coming in 1st Power play, 1st Innings only
                              Valid In T20/ODI Both
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total match Wicket keeper's Dismissals: Wicket
                              keepers Caught outs and Stumping Only Considered
                              In T20/ODI Both
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1st Inn Death Over Runs : Runs Scored, Last Over
                              Only Considered, 1st Innings only Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              High Pship Boundaries in the Match : Maximum
                              Number of Boundaries Scored during any Partnership
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets: If a Batsman Retired hurt means It
                              will not be Counted in Total Wicket.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s in Single Over: Maximum number of 4s hit
                              in a single over of the Match. No ball 4s will be
                              counted. Byes &amp; Leg byes 4s will not be
                              counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 6s in Single Over : Maximum number of 6s hit
                              in a Single over of the Match. No ball 6s will be
                              counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total No Boundaries over’s: Number of over’s where
                              no boundaries (fours or sixes) are scored. If a
                              team all out or Match Resulted in 15.1 then
                              considered as 16 over. Team wise 1st Innings only
                              Considered. Total Match means Both Innings will be
                              considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Impact over’s: Number of over’s scored 10
                              runs or above. If a team all out or Match Resulted
                              in 15.1 then considered as 16 over. Team wise 1st
                              Innings only Considered. Total Match means Both
                              Innings will be considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Reviews Taken in Full Match: Number of
                              Reviews taken in full match. Wickets, Wide &amp;
                              No ball Reviews will be Considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match Successful Reviews: Number of Reviews
                              are Successful. Successful means Original decision
                              must be changed.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match Unsuccessful Reviews: Number of
                              Reviews are Unsuccessful. Unsuccessful means
                              Original decision same after DRS.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Reviews Resulted Umpire's Call: Number of
                              Reviews Resulted Umpire's Call during the Wicket
                              Review.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Reviews Taken by Batting Team: Number of
                              Reviews taken by batting team. Both Innings will
                              be Considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Reviews Taken by Bowling Team: Number of
                              Reviews taken by bowling team. Both Innings will
                              be Considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Reviews Taken by Team: Number of Reviews
                              taken by Particular team during Batting and
                              Bowling.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Concussion in Test:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All bets of one over session will be deleted in
                              test scenario, in case session is incomplete. For
                              example innings declared or match suspended to bad
                              light or any other conditions.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. All bets will be considered as valid if a
                              player has been replaced under concussion
                              substitute, result will be given for the runs
                              scored by the mentioned player. For example DM
                              Bravo gets retired hurt at 23 runs, then result
                              will be given for 23.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Bets of both the player will be valid under
                              concussion substitute.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Match- Events (test):-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Minimum of 300 overs to be bowled in the entire
                              test match, otherwise all bets related to the
                              particular event will get void. For example, Total
                              match caught outs will be valid only if 300 overs
                              been bowled in the particular test match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Limited over events-Test:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              This event will be considered valid only if the
                              number of overs defined on the particular event
                              has been bowled, otherwise all bets related to
                              this event will get void. For example 0-25 over
                              events will be valid only if 25 overs has been
                              bowled, else the same will not be considered as
                              valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the team gets all out prior to any of the
                              defined overs, then balance overs will be counted
                              in next innings. For example if the team gets all
                              out in 23.1 over the same will be considered as 24
                              overs and the balance overs will be counted from
                              next innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Bowler Wicket event's- Test:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Minimum of one legal over (one complete over) has
                              to be bowled by the bowler mentioned in the event,
                              else the same will not be considered as valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Bowler over events- Test:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The mentioned bowler has to complete the defined
                              number of overs, else the bets related to that
                              particular event will get void. For example if the
                              mentioned bowler has bowled 8 overs, then 5 over
                              run of that particular bowler will be considered
                              as valid and the 10 over run will get void
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Player ball event's- Test:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              This event will be considered valid only if the
                              defined number of runs made by the mentioned
                              player, else the result will be considered as 0
                              (zero) balls
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For example if Root makes 20 runs in 60 balls and
                              gets out on 22 runs, result for 20 runs will be 60
                              balls and the result for balls required for 25 run
                              Root will be considered as 0 (Zero) and the same
                              will be given as result
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Limited over events-ODI:-
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              This event will be considered valid only if the
                              number of overs defined on the particular event
                              has been bowled, otherwise all bets related to
                              this event will get void. 0-50 over events will be
                              valid only if 50 over completed, if the team
                              batting first get all out prior to 50 over the
                              balance over will be counted from second innings.
                              For example if team batting first gets all out in
                              35 over balance 15 over will be counted from
                              second innings, the same applies for all events if
                              team gets all out before the defined number of
                              overs
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The events which remains incomplete will be voided
                              if over gets reduced in the match due to any
                              situation, for example if match interrupted in 15
                              overs due to rain/badlight and post this over gets
                              reduced. Events for 0-10 will be valid, all other
                              events related to this type will get deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              This events will be valid only if the defined
                              number of over is completed. For example team
                              batting first gets all out in 29.4 over then the
                              same will be considered as 30 over, the team
                              batting second must complete 20 overs only then
                              0-50 over events will be considered as valid. In
                              case team batting second gets all out in 19.4 over
                              then 0-50 over event will not be considered as
                              valid, This same is valid for 1st Innings only.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Bowler event- ODI:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The mentioned bowler has to complete the defined
                              number of overs, else the bets related to that
                              particular event will get void. For example if the
                              mentioned bowler has bowled 8 overs, then 5 over
                              run of that particular bowler will be considered
                              as valid and the 10 over run will get void
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Other event:- T20</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The events for 1-10 over and 11-20 over will be
                              considered valid only if the number of over
                              mentioned has been played completely. However if
                              the over got reduced before the particular event
                              then the same will be voided, if the team batting
                              first get all out prior to 20 over the balance
                              over will be counted from second innings. For
                              example if team batting first gets all out in 17
                              over balance 3 over will be counted from second
                              innings and that 3 over all events are counted.
                              This same is valid for 1st Innings only.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If over got reduced in between any running event,
                              then the same will be considered valid and the
                              rest will be voided. For example.., match started
                              and due to rain/bad light or any other situation
                              match got interrupted at 4 over and later over got
                              reduced. Then events for 1-10 is valid rest all
                              will be voided
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Bowler Session: Bowler session advance events only
                              valid for 1st inning. This event is valid only if
                              the bowler has completed his maximum quota of
                              overs, else the same will be voided. However if
                              the match has resulted and the particular bowler
                              has already started bowling his final over then
                              result will be given even if he haven't completed
                              the over. For example B Kumar is bowling his final
                              over and at 3.4 the match has resulted then result
                              will be given for B Kumar over runs
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Incase of DLS, the over got reduced then the
                              bowler who has already bowled his maximum quota of
                              over that result will be considered as valid and
                              the rest will be voided
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Dot ball Event:</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only No run will count as dot ball.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If wicket means that will not count as dot ball.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Dot balls By a Bowler Event:
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Leg bye run and wickets considered as Dot ball in
                              bowler
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Boundary on Match 1st Free hit
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Boundary hit on Free hit only be considered as
                              valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Bets will be deleted if there is no Free hit in
                              the mentioned match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Boundary by bat will be considered as valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Boundaries by Player</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both Four and six are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">No Boundaries Event:</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Both Four and Six are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Batsman bat boundaries only considered as valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Free hit boundaries also valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Bets will be voided if that particular ball not
                              completed
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Result will be Given 0 or 4 (No or Yes). For
                              Example batsman hit boundary in particular ball
                              means Result is 0 otherwise Result is 4.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Any query regarding result or rate has to be
                              contacted within 7 days from the event, query
                              after 7 days from the event will not be considered
                              as valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Virtual Cricket</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Scorecard available on the video will be
                              considered as valid. At any situation, if there is
                              a difference between the scorecard in the website
                              and the scorecard available on video. Score card
                              available on video will be valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In case of any technical issues the video gets
                              interrupted/stopped and the same cannot be
                              continued, the existing markets will be voided.
                              However the markets which are already
                              finished/settled will remain valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">CPL:-</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If CPL fixture 0f 33 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided (Match abandoned due to rain/bad light will
                              not be considered in this)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Fancy based on all individual teams are valid only
                              for league stage
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 1st over runs: Average 6 runs will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total fours: Average 22 fours will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total sixes: Average 13 sixes will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets - Average will 13 Wickets be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wides - Average 10 wides will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Extras - Average 18 extras will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total No ball - Average 1 no ball will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Fifties - Average 1 fifties will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Caught outs: Average 9 caught out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Management decision will be final
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest innings run - Only first innings is valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest innings run - Only first innings is valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest over run: Both innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st over run in individual match: Both
                              innings are valid, however for CPL we have created
                              the fancy for 1st innings only
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Fours in individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Sixes in individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Extras in individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Wicket in individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Super over will not be included
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Barbados Tridents</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 24 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 45 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              St Kitts and Nevis Patriots
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 25 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 45 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Trinbago Knight Riders
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 22 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 46 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Guyana Amazon Warriors
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 23 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 44 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">St Lucia Zouks</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 22 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 43 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Jamaica Tallawahs</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Opening partnership run: Average 24 runs will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              First 6 over run: Average 46 run will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Tour Special Events</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Australia tour of Sri Lanka, 2022
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If first match of tour (T20 or ODI) cancelled or
                              over reduce in first match, then all special fancy
                              events will be deleted
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If First match played completely and next match
                              gets over reduced or cancelled, then that match
                              bets all bets will be deleted and first match bets
                              will be valid and average will count in other bets
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Ex. : First match total 4's is 20 and second match
                              over reduced so bets after first match upto second
                              match started that all deleted and for other bets
                              average counted total 4's is 24 and third match
                              total 4's is 26, So Result of Total 4's is 70
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">T20 :</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Matches 1st over runs : Average 6 runs will
                              be given in case match abandoned or over reduced
                              (only 1st innings valid)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Matches 1st 6 over runs : Average 45 runs
                              will be given in case match abandoned or over
                              reduced (Only 1st Innings valid)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total fours: Average 24 fours will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total sixes: Average 9 sixes will be given in case
                              match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Boundaries: Average 33 Boundaries will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Fifties - Average 2 Fifties will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets - Average 12 Wickets will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wides - Average 8 Wides will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Extras - Average 15 Extras will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Caught outs: Average 8 Caught out will be
                              given in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Bowled:- Average 2 Bowled out will be given
                              in case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total LBW:- Average 2 LBW will be given in case
                              match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Run out:- Average 1 Run out will be given in
                              case match abandoned or over reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most runs given by Bowler in an Inning of Tour :
                              Maximum How much Runs conceded by a individual
                              Bowler in an Innings. Ex : For T20I How much runs
                              conceded by a bowler in his 4 overs Quota.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest total runs in individual match of IPL :
                              Maximum Total runs of both Teams in individual
                              match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest innings run - Only first inning is valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership - Both innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st over run of individual match: only
                              first inning is valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Fours of individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Sixes of individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Extras of individual match: Both innings
                              are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest over run: Both innings are valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Top Batsman Runs in Tour : Most runs by an
                              Individual Player in any Individual matches in
                              ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Wickets by Bowler in Tour : Most Wickets
                              taken by Individual Player in Overall ODI/T20I
                              Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Over runs in Tour : Most Runs Scored in
                              Any Single Over of any Individual Match in Overall
                              ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Player Total Runs : Total Runs Scored by an
                              Individual Player in Full ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Player Total 4s : Total 4s Hitted by an Individual
                              Player in Full ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Player Total 6s : Total 6s Hitted by an Individual
                              Player in Full ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Player Boundaries : Total Boundaries Hitted by an
                              Individual Player in Full ODI/T20I Format of Tour
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For Player based Events, If any Player not in
                              playing 11 suppose First match any player played
                              completely but if same player not available in
                              next match, then that match bets all bets will be
                              deleted and first match bets will be valid and
                              average will count in other bets
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If any one match not in Playing 11 means Average
                              Given for that match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">Average For Players:</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              A Finch Total Runs, Boundaries, 4s and 6s : 26,4,3
                              &amp; 1.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              D Warner Total Runs, Boundaries, 4s and 6s :
                              28,5,4&amp; 1.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              P Nissanka Total Runs, Boundaries, 4s and 6s :
                              22,3,2 &amp; 1.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              D Gunathilaka Total Runs, Boundaries, 4s and 6s :
                              23,3,2 &amp; 1.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              J Hazlewood,M Starc,D Chameera &amp; M Theekshana
                              : 2 wkts Average given if player not in playing
                              11.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(13)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Ashes Special</span>
                    {index === 13 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 13 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Note: If Ashes fixture of 5 matches gets reduced
                              for any reason, all special fancies will be voided
                              (match abandoned due to rain/bad light will not be
                              considered). Management decision will be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. Total 1st Over Runs of Ashes: Total of all five
                              match 1st over runs will be counted. Only 1st
                              innings valid. If Australia bats first, only
                              Australia’s 1st over is considered. If match
                              abandoned, 3 runs average will be given.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. Total 1st 5 Over Runs of Ashes: Total of all
                              five match 1st 5 overs will be counted. Only 1st
                              innings valid. If Australia bats first, only
                              Australia’s 1st 5 overs considered. Abandoned
                              match average: 17 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. Total 1st 10 Over Runs of Ashes: Total of all
                              five match 1st 10 overs will be counted. Only 1st
                              innings valid. If Australia bats first, only their
                              1st 10 overs considered. Abandoned match average:
                              35 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. Highest Single Innings Score of Ashes: Maximum
                              runs scored by any team in any single innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. Highest Total Runs of Ashes: Maximum runs
                              scored in any single match of the series. All
                              innings counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              6. High Partnership Runs of Ashes: Highest
                              partnership runs in any innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              7. High Partnership Balls of Ashes: Highest
                              partnership balls faced in any innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              8. Top Batsman Runs in an Inn of Ashes: Maximum
                              runs scored by a batsman in a single innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              9. Highest Run Scorer Runs of Ashes: Maximum runs
                              scored by any batsman in the full tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              10. Highest Wicket Taker Wickets of Ashes: Maximum
                              wickets taken by any bowler in the full
                              tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              11. Events valid only if 300 overs have been
                              played or match has been won. Otherwise, average
                              values apply.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              12. Total 4s of Ashes: Abandoned or drawn match
                              below 300 overs → 115 fours average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              13. Total Wkts of Ashes: Abandoned/draw below 300
                              overs → 34 wickets average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              14. Total Wides of Ashes: Abandoned/draw below 300
                              overs → 9 wides average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              15. Total Noballs of Ashes: Abandoned/draw below
                              300 overs → 14 no-balls average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              16. Total Extras of Ashes: Abandoned/draw below
                              300 overs → 55 extras average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              17. Total Caught Outs of Ashes: Abandoned/draw
                              below 300 overs → 22 caught-outs average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              18. Total Bowled of Ashes: Abandoned/draw below
                              300 overs → 6 bowled average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              19. Total LBW of Ashes: Abandoned/draw below 300
                              overs → 4 LBW average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              20. Total Runout of Ashes: Abandoned/draw below
                              300 overs → 1 runout average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              21. Total 30s of Ashes: Abandoned/draw below 300
                              overs → 5 scores of 30 average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              22. Total 50s of Ashes: Abandoned/draw below 300
                              overs → 5 fifties average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              23. Total 100s of Ashes: Abandoned/draw below 300
                              overs → 2 centuries average. 100+ scores counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              24. Total 150s of Ashes: All 150+ scores counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              25. Total Maidens of Ashes: Abandoned/draw below
                              300 overs → 55 maidens average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              26. Total Duckouts of Ashes: Abandoned/draw below
                              300 overs → 4 ducks average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              27. Total Single Digit Scorers of Ashes:
                              Abandoned/draw below 300 overs → 12 single-digit
                              scores average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              28. Total Double Digit Scorers of Ashes:
                              Abandoned/draw below 300 overs → 20 double-digit
                              scores average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              29. Total Wicketkeeper's Dismissal of Ashes:
                              Abandoned/draw below 300 overs → 8 dismissals
                              average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              30. Total Players facing 50+ Balls of Ashes:
                              Abandoned/draw below 300 overs → 13 players
                              average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              31. Total Four Hitters of Ashes: Abandoned/draw
                              below 300 overs → 28 four-hitters average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              32. Total Wicket Takers of Ashes: Abandoned/draw
                              below 300 overs → 16 wicket-takers average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              33. Total Bowlers Giving 100+ Runs of Ashes:
                              Abandoned/draw below 300 overs → 2 bowlers
                              average.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              34. Highest Match 1st Over: Max runs in match 1st
                              over. Only 1st innings valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              35. Highest Match 1st 5 Overs: Max runs in first 5
                              overs. Only 1st innings valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              36. Highest Match 1st 10 Overs: Max runs in first
                              10 overs. Only 1st innings valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              37. Highest 4s in Individual Match: Most fours in
                              any full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              38. Highest Wides in Individual Match: Most wides
                              in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              39. Highest Noballs in Individual Match: Most
                              no-balls in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              40. Highest Extras in Individual Match: Most
                              extras in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              41. Highest Caught Outs in Individual Match: Most
                              caught-outs in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              42. Highest Bowled in Individual Match: Most
                              bowled dismissals in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              43. Highest LBW in Individual Match: Most LBW
                              dismissals in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              44. Highest Runout in Individual Match: Most
                              runouts in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              45. Highest 30s in Individual Match: Most scores
                              of 30 in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              46. Highest 50s in Individual Match: Most fifties
                              in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              47. Highest 100s in Individual Match: Most
                              hundreds in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              48. Highest Maidens in Individual Match: Most
                              maiden overs in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              49. Highest Duckouts in Individual Match: Most
                              ducks in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              50. Highest Single Digit Scorers: Most
                              single-digit scorers in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              51. Highest Double Digit Scorers: Most
                              double-digit scorers in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              52. Highest Wicketkeeper's Dismissal in a Match:
                              Most keeper dismissals (caught + stumping).
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              53. Highest Players facing 50+ Balls in Match:
                              Most players facing 50+ balls.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              54. Highest Four Hitters in Individual Match: Most
                              four-hitters in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              55. Highest Wicket Takers in Individual Match:
                              Most wicket-takers in a full test match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              56. Highest Bowlers Giving 100+ Runs in Match:
                              Most bowlers conceding 100+ runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              57. Highest Scoring Over Runs: Max runs in any
                              single over of any match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              58. Most Balls faced by a Batsman in an Innings:
                              Most balls faced in any innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              59. Most 4s by a Batsman in Ashes: Most fours by
                              any batsman in the tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              60. Most 50s by a Batsman in Ashes: Most fifties
                              by any batsman in the tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              61. Most 4s by a Batsman in an Innings: Most fours
                              in a single innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              62. Most Runs given by a Bowler in an Innings:
                              Most runs conceded in any innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              63. Most Wickets Taken by a Bowler in an Innings:
                              Most wickets taken in a single innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              64. Most Wickets Taken by a Bowler in a Match:
                              Most wickets in a full match (both innings
                              counted).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(14)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">IPL SPECIAL 2026</span>
                    {index === 14 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 14 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If IPL Fixture of 74 Matches Gets Reduced Due to
                              any Reason, then all the Special Fancies will be
                              Voided (Match Abandoned Due to Rain/Bad Light will
                              not be Considered in this)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Management decision will be final
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Innings run(1st Inn) - Only First Innings
                              is Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest Innings run(1st Inn) - Only First Innings
                              is Valid.1st Inning Playing Team must be Played 20
                              Overs or If Team get all out means Only
                              Considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest Innings run(both Inn) - Both Innings are
                              Valid. 2nd Innings Playing Team must be Complete
                              the Match or Getting All out Means Only
                              Considered.DLS Result not Considered in this.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Total Runs in Single Match of IPL: Maximum
                              Runs Scored by both Teams in Single Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Runs in IPL: Both Innings are
                              Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Balls in IPL: Both Innings are
                              Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tournament Topbatsman Runs in IPL : Highest Run
                              Scored by any Individual Batsman in an
                              Innings.Both Innings are Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Largest Margin Win by Runs of IPL : Maximum Runs
                              Margin Win by Any Team. Example : CSK 210 in 1st
                              Inn and MI 150 in 2nd Inn Means CSK Win by 60 run
                              Margin.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Run Scorer Runs of IPL (Orange Cap) :
                              Maximum Runs Scored by an Individual Batsman in
                              Full Tournament
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Wicket Taker Wickets of IPL (Purple Cap) :
                              Maximum Wickets Taken by a Bowler in Full
                              Tournament
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              How Many time 5 or More Wickets taken by Bowlers :
                              Number of time 5 or More Wickets taken by Bowlers.
                              In Case Same Bowler 2 time 5 or More Wickets taken
                              means Result Counted as 2.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 4's: Average 30 Fours will be Given in Case
                              Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 6's: Average 18 Sixes will be Given in Case
                              Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 30's: Average 3 Thirties will be Given in
                              Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 50's: Average 2 Fifties will be Given in
                              Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total No balls:- Average 1 No ball will be Given
                              in Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets - Average will 13 Wickets be given
                              in Case Match abandoned or over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wides - Average 11 Wides will be Given in
                              Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Extras - Average 17 Extras will be Given in
                              Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Caught outs: Average 9 Caught out will be
                              Given in Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Bowled:- Average 2 Bowled out will be Given
                              in Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total LBW:- Average 1 LBW will be Given in Case
                              Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Run out:- Average 1 Run out will be Given in
                              Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Duckouts in IPL : Average 1 Duckout will be
                              Given in Case Match Abandoned or Over Reduced
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 50+ Partnerships - Average 2 Fifty plus
                              Partnerships will be Given in Case Match Abandoned
                              or Over Reduced. 50 and 50 Above Partnerships All
                              Counted in this.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Highest Scoring Over Runs in IPL: Average 22
                              Runs will be Given in Case Match Abandoned or Over
                              Reduced. Total of Every Match Highest Scoring Over
                              Runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Match 1st Over Run of IPL (1st Inn) :Only
                              First Innings is Valid. Will not Consider if over
                              Reduce before match start.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st 6 over run(1st Inn): Only First
                              Innings is Valid.Will not Consider if over Reduce
                              before Completion 6 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st 10 over run(1st Inn) : Only First
                              Innings is Valid.Will not Consider if over Reduce
                              before Completion 10 over.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 4s,6s,30s,50s,50+ Pship,Duckouts,Single
                              Digit Scorers, Double Digit Scorers,Wickets,Wides,
                              Noballs,Extras,Caught Outs,Bowled,Lbw, Runouts and
                              Stumpings in Individual Match: All Both Innings
                              are Counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Single Digit Scorers : Duck outs Not Considered in
                              this Event. If Not out Batsman/Injured Batsman
                              facing One Legal Delivery and nothing scored ('0')
                              means Considered as Single Digit
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Scoring Over Runs in IPL: Both Innings are
                              Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Balls Faced By a Batsman in an Inn of IPL :
                              Maximum balls Faced by an Individual Batsman in
                              the Single Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Runs Given by a Bowler in an Inn of IPL :
                              Maximum Runs Conceded by a Individual Bowler in an
                              Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Wicket by a Bowler in an Inn of IPL : Maximum
                              Wicket taken by a Individual Bowler in an Innings
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s Hitted by a Batsman of IPL: Maximum 4s
                              Hitted by a Batsman in Full Tournament
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 6s Hitted by a Batsman of IPL: Maximum 6s
                              Hitted by a Batsman in Full Tournament
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 50s Scored by a Batsman of IPL : Maximum
                              Fifty Hitted by a Batsman in Full Tournament
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Catches taken by a Player of IPL : Maximum
                              Caught Out taken by a Player in Full
                              Tournament.Fielder's, Bowler's and WicketKeeper's
                              Caught outs all Considered in this Event
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4's by a Batsman in an Inn of IPL : Maximum
                              4s Hitted by an Individual Batsman in any Single
                              Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 6's by a Batsman in an Inn of IPL : Maximum
                              6s Hitted by an Individual Batsman in any Single
                              Match
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s,6s,30s,50s,50+
                              Pships,Wide,Noball,Extras,Caught Outs,LBWs,Runouts
                              and Duckouts in an Innings Of the Match :
                              Considered For Any Single Innings.All Both Innings
                              Considered as Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Catches by a Player in an Inning of IPL : Any
                              Single Player taking Maximum Catches in Single
                              Match.Fielder's, Bowler's and WicketKeeper's
                              Caught outs all Considered in this Event
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Wicket Keeper Dismissal in an Inning of IPL :
                              Maximum Dismissal by Single Wicket Keeper in an
                              Innings. Wicketkeeper's Caught outs and Stumping
                              Only Considered
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Super over will not be Included
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any Situation if Result is given for any
                              particular event based on the rates given for the
                              same, then the particular Result will be
                              Considered Valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              Result will be Considered Valid
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In Fastest fifty always the first 50 runs will be
                              Considered, for Example of R Sharma scores 1st
                              fifty in 17 balls and scores 100 in next 14 balls,
                              Fastest 50 will be given based on the balls for
                              the 1st fifty runs
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the Match starts Over Reduced Game or 20 Over
                              Game, after the balls are Reduced due to Rain
                              interrupting means comparison Events like Highest
                              4s,6s, boundaries,30s,50s,
                              Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single
                              Digit Scorers, Double Digit Scorers and Most
                              4s,6s,boundaries,30s,50s, Caught
                              outs,Bowled,Duckout, wicket Keeper Dismissals all
                              are Considered for Result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Example : If a Match started as 20 Overs game
                              after Rain Overs Reduced to 16 Overs Match, in
                              that Match Maximum 6s Reached Means that Value
                              Considered for Result
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              id/bets if the same is found to be illegitimate.
                              For example incase of VPN/robot-use/multiple entry
                              from same or different IP and others. Note : only
                              winning bets will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              for live streaming and animation :- Although the
                              current score, time elapsed, video and other data
                              provided on this site is sourced from "live" feeds
                              provided by third parties, you should be aware
                              that this data may be subject to a time delay
                              and/or be inaccurate. Please also be aware that
                              other customers may have access to data that is
                              faster and/or more accurate than the data shown on
                              the site. If you rely on this data to place bets,
                              you do so entirely at your own risk. provides this
                              data AS IS with no warranty as to the accuracy,
                              completeness or timeliness of such data and
                              accepts no responsibility for any loss (direct or
                              indirect) suffered by you as a result of your
                              reliance on it.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(15)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">The Hundred League Rules</span>
                    {index === 15 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 15 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If Hundred fixture of 34 matches gets reduced due
                              to any reason, then all the special fancies will
                              be voided. (Match abandoned due to rain/bad light
                              will not be considered in this)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Management decision will be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest innings run - Only First innings is valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest innings run - Only First innings is valid.
                              1st Inning playing team must be facing 100 balls
                              or If team get all out means considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Runs in Hundred: Both Innings
                              are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Balls in Hundred: Both Innings
                              are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Run Scorer : Total Runs Scored by An
                              Individual Batsman in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Wicket Taker : Total Wickets Taken by a
                              Bowler in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 4's: Average 22 Fours will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 6's: Average 11 Sixes will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Boundaries: Average 34 Boundaries will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 30's: Average 2 Thirties will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 50's: Average 1 Fifties will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets - Average will 13 Wickets be given
                              in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wides - Average 8 Wides will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Extras - Average 17 Extras will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Caught outs: Average 8 Caught out will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Bowled:- Average 2 Bowled out will be given
                              in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total LBW:- Average 1 LBW will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Run out:- Average 1 Run out will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Duckouts in Hundred : Average 1 Duckout will
                              be given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Single Digit Scorers in Hundred : Average 6
                              Single Digit Scorers will be given in case match
                              abandoned or over reduced. Duck outs Not
                              Considered in this Event. If Not out
                              Batsman/Injured Batsman facing One Legal Delivery
                              and othing scored ('0') means Considered as Single
                              Digit.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Double Digit Scorers in Hundred : Average 9
                              Double Digit Scorers will be given in case match
                              abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest
                              4s,6s,Boundaries,30s,50s,Wickets,Wides,Extras,Caught
                              Outs,Bowled,Lbw, Runouts, Duckouts,Single Digit
                              Scorers and Double Digit Scorers in individual
                              match: All Both innings are Counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s,6s,Boundaries,30s,50s,Caught
                              Outs,Bowled,Duckouts and Wicketkeeper Dismissals
                              in an Innings Of the Match : Considered For Any
                              Innings.All Both Innings Considered as Valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s by a Batsman in the Match : Maximum 4s
                              Hitted by an Individual Batsman in any Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 6s by a Batsman in the Match : Maximum 6s
                              Hitted by an Individual Batsman in any Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Balls Faced By a Batsman of Hundred : Maximum
                              balls Faced by an Individual Batsman in the Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most runs given by Bowler in an Inning of Hundred
                              : Maximum Runs conceded by a individual Bowler in
                              an Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most wickets by Bowler in an inning : Maximum
                              Wickets taken by a individual Bowler in an
                              Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the match starts as a 100 ball game, after the
                              balls are reduced due to rain interrupting means
                              comparison Events like Highest 4s,6s,
                              boundaries,30s,50s,
                              Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single
                              Digit Scorers, Double Digit Scorers and Most
                              4s,6s,boundaries,30s,50s, Caught
                              outs,Bowled,Duckout, wicket Keeper Dismissals all
                              are considered for Result. Example : If a match
                              started as 100 balls game after rain balls reduced
                              to 80 balls match, in that match Maximum 6s
                              reached means that Value considered for Result of
                              Highest 6s in Individual Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Due to Rain match started as Balls reduced match
                              all the comparison Events not considered for
                              Result. Example: Due to Rain match only 30 ball
                              both side Means Maximum Single Digit Scorers
                              reached maximum in that match means Not considered
                              for Result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Super over (Super 5) will not be included.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(16)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">The Hundred League Rules</span>
                    {index === 16 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 16 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If Hundred fixture of 34 matches gets reduced due
                              to any reason, then all the special fancies will
                              be voided. (Match abandoned due to rain/bad light
                              will not be considered in this)
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid, similarly if the tournament gets
                              canceled due to any reason the previously given
                              result will be considered valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Management decision will be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest innings run - Only First innings is valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest innings run - Only First innings is valid.
                              1st Inning playing team must be facing 100 balls
                              or If team get all out means considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Runs in Hundred: Both Innings
                              are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Partnership Balls in Hundred: Both Innings
                              are valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Run Scorer : Total Runs Scored by An
                              Individual Batsman in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest Wicket Taker : Total Wickets Taken by a
                              Bowler in Full Tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 4's: Average 22 Fours will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 6's: Average 11 Sixes will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Boundaries: Average 34 Boundaries will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 30's: Average 2 Thirties will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 50's: Average 1 Fifties will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wickets - Average will 13 Wickets be given
                              in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Wides - Average 8 Wides will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Extras - Average 17 Extras will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Caught outs: Average 8 Caught out will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Bowled:- Average 2 Bowled out will be given
                              in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total LBW:- Average 1 LBW will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Run out:- Average 1 Run out will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Duckouts in Hundred : Average 1 Duckout will
                              be given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Single Digit Scorers in Hundred : Average 6
                              Single Digit Scorers will be given in case match
                              abandoned or over reduced. Duck outs Not
                              Considered in this Event. If Not out
                              Batsman/Injured Batsman facing One Legal Delivery
                              and othing scored ('0') means Considered as Single
                              Digit.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total Double Digit Scorers in Hundred : Average 9
                              Double Digit Scorers will be given in case match
                              abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest
                              4s,6s,Boundaries,30s,50s,Wickets,Wides,Extras,Caught
                              Outs,Bowled,Lbw, Runouts, Duckouts,Single Digit
                              Scorers and Double Digit Scorers in individual
                              match: All Both innings are Counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s,6s,Boundaries,30s,50s,Caught
                              Outs,Bowled,Duckouts and Wicketkeeper Dismissals
                              in an Innings Of the Match : Considered For Any
                              Innings.All Both Innings Considered as Valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 4s by a Batsman in the Match : Maximum 4s
                              Hitted by an Individual Batsman in any Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most 6s by a Batsman in the Match : Maximum 6s
                              Hitted by an Individual Batsman in any Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most Balls Faced By a Batsman of Hundred : Maximum
                              balls Faced by an Individual Batsman in the Single
                              Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most runs given by Bowler in an Inning of Hundred
                              : Maximum Runs conceded by a individual Bowler in
                              an Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most wickets by Bowler in an inning : Maximum
                              Wickets taken by a individual Bowler in an
                              Innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If the match starts as a 100 ball game, after the
                              balls are reduced due to rain interrupting means
                              comparison Events like Highest 4s,6s,
                              boundaries,30s,50s,
                              Wickets,Wides,Extras,Caughtouts,Bowled,Lbw,Runout,Duckout,Single
                              Digit Scorers, Double Digit Scorers and Most
                              4s,6s,boundaries,30s,50s, Caught
                              outs,Bowled,Duckout, wicket Keeper Dismissals all
                              are considered for Result. Example : If a match
                              started as 100 balls game after rain balls reduced
                              to 80 balls match, in that match Maximum 6s
                              reached means that Value considered for Result of
                              Highest 6s in Individual Match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Due to Rain match started as Balls reduced match
                              all the comparison Events not considered for
                              Result. Example: Due to Rain match only 30 ball
                              both side Means Maximum Single Digit Scorers
                              reached maximum in that match means Not considered
                              for Result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Super over (Super 5) will not be included.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(17)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">
                      WOMEN'S PREMIER LEAGUE (WPL)
                    </span>
                    {index === 17 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 17 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If WPL fixture of 22 matches gets reduced due to
                              any reason, then all the special fancies will be
                              voided. Match abandoned due to rain or bad light
                              will not be considered in this.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              At any situation if result is given for any
                              particular event based on the rates given for the
                              same, then the particular result will be
                              considered valid. Similarly, if the tournament
                              gets canceled due to any reason, the previously
                              given result will be considered valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Management decision will be final.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest innings run: Only first innings is valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Lowest innings run: Only first innings is valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest total runs of WPL: Maximum runs scored by
                              two teams in a single match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest partnership runs in WPL: Both innings are
                              valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest partnership balls in WPL: Both innings are
                              valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In fastest fifty, always the first 50 runs will be
                              considered. For example, if a batsman scores first
                              50 in 17 balls and next 50 in 14 balls, fastest 50
                              will be calculated based on balls taken for the
                              first 50 runs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest run scorer runs: Total runs scored by an
                              individual batsman in the full tournament (Orange
                              Cap).
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest wicket taker wickets: Total wickets taken
                              by a bowler in the full tournament (Purple Cap).
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total match 1st over runs: Average 6 runs will be
                              given in case match abandoned or over reduced.
                              First innings only considered.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total fours: Average 34 fours will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total wickets: Average 12 wickets will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total wides: Average 8 wides will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total extras: Average 14 extras will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total caught outs: Average 8 caught outs will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total bowled outs: Average 2 bowled outs will be
                              given in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total LBW: Average 1 LBW will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total run outs: Average 1 run out will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 30s: Average 2 thirties will be given in
                              case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total 50s: Average 1 fifty will be given in case
                              match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total duck outs: Average 1 duck out will be given
                              in case match abandoned or over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total single digit scorers: Average 6 single digit
                              scorers will be given in case match abandoned or
                              over reduced. Duck outs not considered. Not out or
                              injured batsman facing one legal delivery and
                              scoring 0 will be considered single digit.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total double digit scorers: Average 8 double digit
                              scorers will be given in case match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total four hitters in WPL: Average 10 four hitters
                              will be given in case match abandoned or over
                              reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total six hitters in WPL: Average 4 six hitters
                              will be given in case match abandoned or over
                              reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Total wicket takers in WPL: Average 7 wicket
                              takers will be given in case match abandoned or
                              over reduced.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st over runs: First innings only valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest 1st six over runs: First innings only
                              valid. Will not be considered if overs are reduced
                              before completion of 6 overs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest fours, wickets, wides and extras in
                              individual match: Both innings are counted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Highest scoring over runs: Maximum runs scored in
                              any single over in the full tournament.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most balls faced by a batsman: Maximum balls faced
                              by an individual batsman in a single match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most fours hit by a batsman in WPL innings:
                              Maximum fours hit by an individual batsman in any
                              single innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most dot balls by a bowler in WPL innings: Maximum
                              dot balls by a single bowler in his 4 overs.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most runs conceded by a bowler in an innings:
                              Maximum runs conceded by an individual bowler in
                              an innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Most wickets by a bowler in an innings: Maximum
                              wickets taken by an individual bowler in an
                              innings.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If a match starts as an over-reduced or 20 over
                              game and later overs are reduced due to rain
                              interruption, comparison events such as highest
                              fours, sixes, boundaries, 30s, 50s, wickets,
                              wides, extras, caught outs, bowled, LBW, run out,
                              duck out, single digit scorers, double digit
                              scorers and wicket keeper dismissals will be
                              considered for result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Example: If a match starts as a 20 overs game and
                              later reduces to 16 overs due to rain, and maximum
                              sixes are achieved in that match, that value will
                              be considered for result.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Super over will not be included.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(18)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">Kabaddi</span>
                    {index === 18 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 19 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In any circumstances management decision will be
                              final related to all Fancy of kabaddi of our
                              exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All fancy bets will be validated when match has
                              been tied.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Result of individual player of fancy will be
                              validated only when player play that match.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In any case wrong rate has been given in fancy
                              that particular bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              For Playoffs Final Result Of 40 Minutes Of Two
                              Halves Will Be Valid In Our Exchange.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(20)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">BINARY</span>
                    {index === 20 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 20 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All session's bets will be confirmed at market
                              rate only.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All session's settlement price means result can be
                              checked from exchange's official sites.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              All session's result will be settlement price
                              provided by exchange after market close.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Every product has two types of prices: SPOT and
                              FUTURE. We provide only near month's FUTURE price
                              in Binary Session.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Session timings: NFY, B-NFY, AXS, ICI, RIL, SBI,
                              TT STL - Monday to Friday 10:00 a.m. to 2:30 p.m.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              GOLD, SILVER, CRUDE - Monday to Friday 11:30 a.m.
                              to 10:30 p.m.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              CMX CRUDE, DOWJONES, NASDAQ, SNP - Monday to
                              Friday 7:30 p.m. to 12:00 a.m.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Same bets same time from multiple ID not allowed.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Operating and market making bets
                              (cheating/line/chamka bets) are not allowed.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If any wrong rate has been given in fancy, that
                              particular bet will be canceled.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Deleted bets will remove under 24hr and clients
                              will be notified.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(21)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">MATCH</span>
                    {index === 21 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 21 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Company reserves the right to suspend/void any
                              ID/bets if the same is found to be illegitimate.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Example: If we find VPN/robot-use/multiple entry
                              from the same IP or multiple bets at the same
                              time, only winning bets will be voided.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Example: In case of lay-back betting on wrong
                              outcomes, the lower rate bets will be voided and
                              higher rate bets will be considered valid.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Tennis match odds: If 1st set has not been
                              completed due to retirement or disqualification,
                              all bets for that individual match will be void.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Football match odds: All bets apply to full
                              regular time including stoppage time. Extra time
                              and penalty shootout are not included.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(22)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">KHADO</span>
                    {index === 22 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 22 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Only First inning valid for T20 and one day
                              matches.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Same will be work like Lambi. If match abandoned
                              or over reduced, all bets will be deleted.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              You can choose your own value in this event.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(23)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">ELECTION</span>
                    {index === 23 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 23 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              The final result declared by election commission
                              of India for Loksabha election 2019 will be valid
                              in our exchange.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Accidental issues during Loksabha election 2019
                              will not be counted in our exchange.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(24)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">VIRTUAL TENNIS</span>
                    {index === 24 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 24 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If streaming stops or some technical issue occurs,
                              the match will be abandoned.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              If there is any technical interference in the
                              match then also the match will be abandoned.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              There will be 3 sets in the match. There are 3
                              games in 1 set.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              In the match, within any set, there are 3-3 games
                              between the two players (level game) till a tie
                              break of 5 points is played, according to which
                              the one who gets 2 points more than the difference
                              of points will win the set.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleChangeIndex(25)}
                    className=" active:opacity-70 flex justify-between items-center w-full px-2 py-2 text-left bg-loginInputGray text-white"
                  >
                    <span className="text-md">GENIE COMBO SPECIAL</span>
                    {index === 25 ? (
                      <FaMinus className="w-3 h-3 transition-transform" />
                    ) : (
                      <FaPlus className="w-3 h-3 transition-transform" />
                    )}
                  </button>
                  <div
                    className="transition-all duration-500 overflow-hidden"
                    style={{ maxHeight: index === 25 ? "fit-content" : "0px" }}
                  >
                    <div className="overflow-auto">
                      <table className="table-fixed w-full border border-loginInputGray text-sm text-red-500 border-collapse">
                        <tbody>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">What is Genie Bet?</td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              Mumbai Indians will win + Quinton De Kock will
                              score 20+ runs + Total Match Runs 385+ = 41.00
                              Combined Rate.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              1. If a ball is not bowled during a match, then
                              all bets will be void.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              2. In the event of a match being decided by a
                              bowl-off or toss of the coin, all bets will be
                              void.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              3. If a player included in any selection in the
                              bet is not named in the official starting XI then
                              the whole bet will be made void, regardless of the
                              rest of the selections within the bet. If the
                              player takes to the pitch, then all player related
                              bets will be settled accordingly as win/loss.
                              'Player A to get 1+ Six' would be a losing
                              selection if he participates in fielding but does
                              not bat. 'Player B to get 1+ Wicket' would be a
                              losing selection if he takes any part in the match
                              regardless of whether he bowls. This ruling refers
                              to any player related markets.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              4. In the case of official substitutes/impact
                              players etc, bets containing players that are
                              official substitutes and not in the official
                              starting XI's will be void.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              5. Any void selection within your bet, will deem
                              the entire bet void.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              6. In the event of a batsman retiring for any
                              reason, all relevant batting markets for this
                              batsman will be settled on the runs at the time of
                              their retirement.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              7. Penalty runs will not be included in any
                              settlement totals.
                            </td>
                          </tr>
                          <tr className="border border-loginInputGray">
                            <td className="px-3 py-2">
                              8. In case of rain or If over gets reduced then
                              then all bets will be void.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
