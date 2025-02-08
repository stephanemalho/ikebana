import Header from './components/header/Header';

export default function Home() {
    return (
        <main className="flex m-auto mx-6">
            <div className="flex w-full h-screen max-w-[1460px] m-auto">
                <Header />
            </div>
        </main>
    );
}
