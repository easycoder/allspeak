!   parent.as

    script Parent

    module Child

!    debug step

    run `child.as` as Child
    on message
    begin
        print the sender cat `: ` cat the message
        exit
    end
    wait 5 seconds
    send `hello` to Child
    stop
