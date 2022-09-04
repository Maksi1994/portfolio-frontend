import BackendHeader from '../components/BackendHeader';

export default function BackendLayout(props) {

    return <section className="">
        <BackendHeader></BackendHeader>

        <div className="content mt-5 mb-5 container mx-auto">
            {props.children}
        </div>
    </section>
}
