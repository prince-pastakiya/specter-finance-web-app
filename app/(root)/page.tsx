import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: 'Prince', lastName: 'Pastakiya', email: 'princepastakiya@gmail.com' };

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting" // Fix: Change "greetings" to "greeting"
                        title="Welcome,"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your Bank Accounts and Finance."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={320439.78}
                    />
                </header>
                RECENT TRANSACTION
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 35627.65 }, { currentBalance: 3445.89 }]}
            />
        </section>
    )
}

export default Home
