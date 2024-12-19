"use client"
import Input from "@/app/ui/Input";
import Checkbox from "@/app/ui/Checkbox";

const FormApplication = () => {
    return (
        <form action="" className={'formApplication'} onClick={(e) => e.stopPropagation()}>
            <h4>Получиться предложение</h4>
            <Input type={'text'} label={'Имя'}/>
            <Input type={'tel'} label={'Телефон'}/>
            <label className={'inputLabel'}>Комментарий</label>
            <textarea></textarea>
            <Checkbox
                item={'Нажимая кнопку «Получить предложение»,  Вы соглашаетесь с Политикой защиты данных ООО «МайБроАвторус»'}
            />
            <button>
                Отправить
            </button>
        </form>
    );
};

export default FormApplication;