// import {useLocation} from "react-router-dom";
import BetForm from "../Components/Table/Bet-form/Bet-form";
import BetInfo from "../Components/Table/Bet-info/Bet-info";
import Bets from "../Components/Table/Bets/Bets";


const Table = () => {
    //let { state } = useLocation();

    //console.log(state);

    return (
        <>
            {/*Table { state.table }*/}

            <div className="widget">
                <div className="widget__header">
                    <div className="widget__title">
                        Сделать ставку
                    </div>
                </div>

                <div className="widget__content filled">
                    <BetForm />
                </div>
            </div>

            <div className="widget">
                <div className="widget__header">
                    <div className="widget__title">
                        Информация о раунде #12441
                    </div>
                </div>

                <div className="widget__content filled">
                    <BetInfo />
                </div>
            </div>

            <div className="widget">
                <div className="widget__header">
                    <div className="widget__title">
                        Ставки
                    </div>
                </div>

                <div className="widget__content filled">
                    <Bets />
                </div>
            </div>

            <div className="widget">
                <div className="widget__header">
                    <div className="widget__title">Последние победители</div>
                </div>

                <div className="widget__content table-responsive">
                    <table className="table table-striped media-table table-compact">
                        <thead>
                        <tr>
                            <th width="50">ID</th>
                            <th>Участник</th>
                            <th>Ставка</th>
                            <th>Выигрыш</th>
                            <th>Шанс</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="spacer"></tr>
                        <tr>
                            <td colSpan="5">Нет данных</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;
