import React from "react";

function Home() {
    return (
        <div>
            <div className="widget widget__form">
                <header className="widget__header">
                    <div className="widget__title title_full">
                        <i className="fa fa-question-circle-o"></i>
                        О проекте
                    </div>
                </header>

                <div className="widget__content filled">
                    Fast money - Быстрые деньги. Сервис моментальных лотерей между живыми людьми на реальные
                    деньги.<br/><br/>
                    Чтобы играть с другими людьми, Вам нужно только авторизоваться, выбрать стол и сделать
                    ставку!<br/><br/>
                    После завершения всех ставок, система автоматически через 30 секунд выбирает победителя,
                    который забирает все деньги находящиеся в банке стола себе.<br/><br/>
                    Удачной игры на нашем проекте Fast money!
                </div>
            </div>
        </div>
    );
}

export default Home;
