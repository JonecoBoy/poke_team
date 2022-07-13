import React from "react"
import styled from "styled-components"
import { Progress } from 'reactstrap';

const CardStats = ({stats}) => {

    //max possible stat is 155, so need to put it in %
    const hp = stats[0].base_stat;
    const atk = stats[1].base_stat;
    const def = stats[2].base_stat;
    const sp_atk = stats[3].base_stat;
    const sp_def = stats[4].base_stat;
    const spd = stats[5].base_stat;

    return (<>

            <HpStat>
                <div className='label'>HP:
                    </div>
                <div className='progressbar'>
                <Progress
                    bar
                    value={hp*100/250}
                >
                    {hp}
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
                    value={atk*100/155}
                >
                    {atk}
                </Progress></div>
            </CommonStat>
            <CommonStat>
                <div className='label'>Def:
                </div>
                <div className='progressbar'>
                <Progress
                    bar
                    striped
                    value={def*100/155}
                >
                    {def}
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
                    value={sp_atk*100/155}
                >
                    {sp_atk}
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
                    value={sp_def*100/155}
                >
                    {sp_def}
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
                    value={spd*100/155}
                >
                    {spd}
                </Progress></div>
            </CommonStat>

        </>)
}

export default CardStats;

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