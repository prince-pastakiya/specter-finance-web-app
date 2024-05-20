import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

    const loggedIn = await getLoggedInUser();

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting" // Fix: Change "greetings" to "greeting"
                        title="Welcome,"
                        user={loggedIn?.name || 'Guest'}
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
