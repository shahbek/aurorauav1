import styled from 'styled-components';

export const Layout = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    place-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
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