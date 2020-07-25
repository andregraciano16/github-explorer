import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi'
const Dashboard: React.FC = () => {
    return (
    <>
      <img src={logoImg} alt="GitHub Explorer"/>
      <Title>Dashboard</Title>
      <Form>
          <input placeholder="Digite o nome do repositório aqui" />
          <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
            <img
                src="https://miro.medium.com/max/383/1*co_1qORNdM0PI1nvCp7Iig.png"
                alt="Andre Graciano" />
            <div>
                <strong>rocketseat/uniform</strong>
                <p>Repositorio do git e muito legal</p>
            </div>
            <FiChevronRight size={20} />
        </a>

        <a href="teste">
            <img
                src="https://miro.medium.com/max/383/1*co_1qORNdM0PI1nvCp7Iig.png"
                alt="Andre Graciano" />
            <div>
                <strong>rocketseat/uniform</strong>
                <p>Repositorio do git e muito legal</p>
            </div>
            <FiChevronRight size={20} />
        </a>

        <a href="teste">
            <img
                src="https://miro.medium.com/max/383/1*co_1qORNdM0PI1nvCp7Iig.png"
                alt="Andre Graciano" />
            <div>
                <strong>rocketseat/uniform</strong>
                <p>Repositorio do git e muito legal</p>
            </div>
            <FiChevronRight size={20} />
        </a>

      </Repositories>

    </>
    );
};

export default Dashboard;
