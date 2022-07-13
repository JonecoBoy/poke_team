import React from "react"
import styled from "styled-components"
import { Progress } from 'reactstrap';

const TeamStats = ({stats}) => {
return(
    <>
        <HpStat>
            <div className='label'>HP:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    value={stats.hp*100/250}
                >
                    {Math.round(stats.hp)}
                </Progress></div>
        </HpStat>
        <CommonStat>
            <div className='label'>Atk:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    color="danger"
                    striped
                    value={stats.atk*100/155}
                >
                    {Math.round(stats.atk)}
                </Progress></div>
        </CommonStat>
        <CommonStat>
            <div className='label'>Def:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    striped
                    value={stats.def*100/155}
                >
                    {Math.round(stats.def)}
                </Progress></div>
        </CommonStat>
        <CommonStat>
            <div className='label'>Sp. Atk:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    color="success"
                    striped
                    value={stats.spAtk*100/155}
                >
                    {Math.round(stats.spAtk)}
                </Progress></div>
        </CommonStat>
        <CommonStat>
            <div className='label'>Sp. Def:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    color="info"
                    striped
                    value={stats.spDef*100/155}
                >
                    {Math.round(stats.spDef)}
                </Progress></div>
        </CommonStat>
        <CommonStat>
            <div className='label'>Spd:
            </div>
            <div className='progressbar'>
                <Progress
                    bar
                    striped
                    color="warning"
                    value={stats.spd*100/155}
                >
                    {Math.round(stats.spd)}
                </Progress></div>
        </CommonStat>

    </>
)

}

export default TeamStats

const HpStat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  .label {
    display: flex;
    flex-direction: column;
    width: 60px;
  }
  .progressbar {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    background-color: rgba(240,240,240,0.45);
  }
`

const CommonStat = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
  .label {
    display: flex;
    flex-direction: column;
    width: 60px;
  }
  .progressbar {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    background-color: rgba(240,240,240,0.45);
  }
`