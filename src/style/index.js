import styled from 'styled-components';

export const Layout = styled.div`
    width: 100%;
    display: flex;
    background: #f3f3f3;
    );
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: auto;
    padding: 36px 48px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px;
    border-radius: 20px;
    text-align: center;
    background:rgba(255,255,255,0.3);
    p {
        margin-top: -10px;
        color: #777;
    }
`

export const BoxUpload = styled.div`
    display: grid;
    margin-top: 20px;
    place-items: center;
    border: 1px dashed white;
    /* padding: 36px 48px; */
    position: relative;

    height: 100%;
    width: 100%;

    background:rgba(255,255,255,0.05);
    border-radius: 20px;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        opacity: .9;
        height: 30px;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 15px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`