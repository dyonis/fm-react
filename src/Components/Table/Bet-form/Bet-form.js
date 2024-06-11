//import './Bet-form.scss';

const BetForm = () => {
    return (
        <div className="bet-form">
            <input type="text" placeholder="100" className="bet-form__input" defaultValue={1} />
            <button type="button" className="btn btn-danger bet-form__btn">
                Сделать ставку
            </button>
        </div>
    );
};

export default BetForm;
