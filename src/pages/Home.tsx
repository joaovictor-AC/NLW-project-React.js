
import illustrationImg from '../assests/images/illustration.svg'
import logoImg from '../assests/images/logo.svg'
import googleIconImg from '../assests/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth"

export function Home() {

    const history = useHistory();

    const { user, signInWithGoogle } = useAuth();

    const handleCreateRoom = async () => {

        if (!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }

    return (

        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de   Q&amp;A ao vivo</strong>
                <p>Tira as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">

                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie a sua sala com o Google
                    </button>

                    <div className="separator">ou entre em uma sala</div>

                    <form>
                        <input type="text"
                            placeholder="Digite o código da sala" />

                        <Button type="submit">
                            Entrar na sala
                        </Button>

                    </form>

                </div>
            </main>

        </div>

    );

}