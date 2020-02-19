import React from 'react';

class Stesha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokushala: true,
            poglazhena: false,
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }

    //Мася хочет погладить Стешу (сделать poglazhena: true)

    //Масе нужно знать, была ли поглажена Стеша, чтобы снова её погладить?
    //Я думаю, что нет, ведь гладить котиков можно бесконечно и бескорыстно
    //Поэтому, достаточно использовать this.setState({ poglazhena: true });
    //Теперь котик точно поглажен

    //Мася хочет покормить Стешу (сделать pokushala: true)

    //Масе нужно знать, покушала ли Стеша, чтобы снова её покормить?
    //Я думаю, что да, потому что Стеша жадинка и любит толстеть. Этого нельзя допустить.
    //Поэтому, прежде чем кормить Стешу, надо проверить, кушала ли она
    //Информация об этом лежит в state поле pokushala
    //В данном случае надо использовать
    //this.setState((state) => {
    //      if (state.pokushala === false) {
    //          return {
    //              pokushala: true;
    //          }
    //      }
    // });
    //Котик будет покормлен (pokushala: true) только если перед этим его никто не кормил (pokushala: false)

}

this.setState(
    {
        pokushala: true
    }
);

this.setState(pokormit());

const pokormit = () => {
    return {
        pokushala: true
    }
};