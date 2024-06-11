import './Bet-info.scss';

const BetInfo = () => {
    return (
        <div className="round-info">
            <div className="round-info__timer">
                До конца раунда:
            </div>
            <div className="round-info__prize">
                Prize:
                $<span className="round-info__prize-sum">0.80</span>
            </div>
        </div>
    );
};

export default BetInfo;
